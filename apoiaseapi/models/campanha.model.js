var mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");

var CampanhaSchema = new mongoose.Schema({
    nome: String
});

CampanhaSchema.plugin(mongoosePaginate);
const Campanha = mongoose.model('Campanha', CampanhaSchema);

module.exports = Campanha;