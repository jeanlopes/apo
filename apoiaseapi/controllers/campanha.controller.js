var CampanhaService = require("../services/campanha.service");

exports.getCampanhas = async  (req, res, next) => {

    try {

        let mes = req.params.mes;
        let ano = req.params.ano;
        let campanhas = await CampanhaService.getCampanhas(mes, ano);

        return res.status(200).json(campanhas);
    } catch(e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

