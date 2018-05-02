var campanhaModel = require("../models/campanha.model");
var apoioModel = require("../models/apoio.model");
var checkHelper = require('../helpers/checkData.helper');

exports.getCampanhas = async (mes, ano) => {

    var campanhasBag = [];

    if (mes == null || ano == null) {
        mes = new Date().getUTCMonth();
        ano = new Date().getFullYear();
    }
    try {

        const cursor = apoioModel.find({ 'vencimento.mes': mes, 'vencimento.ano': ano }).cursor();


        for (let apoio = await cursor.next(); apoio != null; apoio = await cursor.next()) {
            let campanha = {
                id: '',
                nome: '',
                apoiador: '',
                apoioCobrado: 0,
                apoioNaoCobrado: 0,
                inadimplente: []
            };


            // nome
            await campanhaModel.findById(apoio.campanha).then((a_campanha) => {
                campanha.id = a_campanha.id;
                campanha.nome = a_campanha.nome;
            }).catch((err) => { console.log(err); });

            campanha.apoiador = apoio.apoiador.toString();

            switch (apoio.status) {
                case 'apoioPago':
                    campanha.apoioCobrado = apoio.valor;
                    break;

                case 'apoioNaoPagoBoletoImpresso':
                case 'apoioNaoPagoBoletoNaoImpresso':
                    campanha.apoioNaoCobrado = apoio.valor;
                    
                    if (checkHelper.checkDataVencida(apoio.vencimento))
                        campanha.inadimplente = apoio.apoiador.toString();
                    break;
            }

            let achou = false;
            for (let i in campanhasBag) {
                if (campanhasBag[i].id == campanha.id) {
                    achou = true;
                    campanhasBag[i].totalApoiosCobrados += campanha.apoioCobrado;
                    campanhasBag[i].totalApoiosNaoCobrados += campanha.apoioNaoCobrado;


                    let achouApoiador = false;
                    for (let a in campanhasBag[i].totalApoiadores)
                        if (campanhasBag[i].totalApoiadores[a] == campanha.apoiador)
                            achouApoiador = true;
                    if (!achouApoiador)
                        campanhasBag[i].totalApoiadores.push(campanha.apoiador);

                    let achouInadimplente = false;
                    for (let b in campanhasBag[i].inadimplencia)
                        if (campanhasBag[i].inadimplencia[b] == campanha.inadimplente)
                            achouInadimplente = true;
                    if (!achouInadimplente)
                        campanhasBag[i].inadimplencia.push(campanha.inadimplente);
                }
            }


            if (!achou) campanhasBag.push({
                id: campanha.id,
                nome: campanha.nome,
                totalApoiadores: [campanha.apoiador],
                totalApoiosCobrados: campanha.apoioCobrado,
                totalApoiosNaoCobrados: campanha.apoioNaoCobrado,
                inadimplencia: campanha.inadimplente == null ? [] : [campanha.inadimplente]
            });
        }

        return campanhasBag;

    } catch (e) {
        throw Error('Erro buscando campanhas  ' + e.stack);
    }
}

