var apoiadorModel = require('../models/apoiador.model');
var apoioModel = require('../models/apoio.model');


exports.getApoiadores = async (mes, ano) => {

    var apoiadoresBag = [];

    if (mes == null || ano == null) {
        mes = new Date().getUTCMonth();
        ano = new Date().getFullYear();
    }

    try {

        const cursor = apoioModel.find({ 'vencimento.mes': mes, 'vencimento.ano': ano }).cursor();

        for (let apoio = await cursor.next(); apoio != null; apoio = await cursor.next()) {
            let apoiador = {
                id: '',
                nome: '',
                totalPago: 0,
                totalNaoPago: 0
            };

            await apoiadorModel.findById(apoio.apoiador).then(a_apoiador => {
                apoiador.id = a_apoiador.id;
                apoiador.nome = a_apoiador.nome;
            }).catch(err => { console.log(err); });

            switch (apoio.status) {
                case 'apoioPago':
                    apoiador.totalPago = apoio.valor;
                    break;

                case 'apoioNaoPagoBoletoImpresso':
                case 'apoioNaoPagoBoletoNaoImpresso':
                    apoiador.totalNaoPago = apoio.valor;
                    break;
            }

            let achou = false;

            for (let i in apoiadoresBag) {
                if (apoiadoresBag[i].id = apoiador.id) {
                    achou = true;
                    apoiadoresBag[i].totalPago += apoiador.totalPago;
                    apoiadoresBag[i].totalNaoPago += apoiador.totalNaoPago;
                }
            }

            if (!achou) apoiadoresBag.push({
                id: apoiador.id,
                nome: apoiador.nome,
                totalPago: apoiador.totalPago,
                totalNaoPago: apoiador.totalNaoPago
            });
        }

        return apoiadoresBag;

    } catch (e) {
        throw Error('Erro buscando apoiadores ' + e.stack);
    }
}