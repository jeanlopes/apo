var mongoose = require("mongoose");
//import mongoosePaginate from "mongoose-paginate";
var Campanha = require("./campanha.model");
var Apoiador = require("./apoiador.model");


const Status = ["apoioPago", "apoioNaoPagoBoletoImpresso", "apoioNaoPagoBoletoNaoImpresso"];

var ApoioSchema = new mongoose.Schema({
    valor : Number,
    status: {type: String, enum: Status},
    campanha: {type: mongoose.Schema.Types.ObjectId, ref: 'Campanha' },
    apoiador: {type: mongoose.Schema.Types.ObjectId, ref: 'Apoiador'},
    vencimento: {
        mes: Number,
        ano: Number
    }
});

// Nao tenho paginacao neste prototipo (a paginacao sao os meses)
//ApoioSchema.plugin(mongoosePaginate);
const Apoio = mongoose.model('Apoio', ApoioSchema);

module.exports = Apoio;