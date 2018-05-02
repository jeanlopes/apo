var mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");

var ApoiadorSchema = new mongoose.Schema({
    nome: String,
    email: String
});

ApoiadorSchema.plugin(mongoosePaginate);
const Apoiador = mongoose.model('Apoiador', ApoiadorSchema);

module.exports = Apoiador;