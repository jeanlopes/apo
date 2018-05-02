var ApoiadorService = require("../services/apoiador.service");

exports.getApoiadores = async  (req, res, next) => {

    try {

        let mes = req.params.mes;
        let ano = req.params.ano;
        let apoiadores = await ApoiadorService.getApoiadores(mes, ano);

        return res.status(200).json(apoiadores);
    } catch(e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}