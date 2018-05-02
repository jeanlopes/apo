var Apoio = require('./apoio.model');
var Campanha = require('./campanha.model');

var mongoose = require('mongoose');
var bluebird = require('bluebird');

mongoose.Promise = bluebird;
mongoose.connect('mongodb://127.0.0.1:27017/apoiasedb')
  .then(()=> { 
    console.log(`Succesfully Connected to the Mongodb Database  at URL : mongodb://127.0.0.1:27017/apoiasedb`);
  })
  .catch(()=> { console.log(`Error Connecting to the Mongodb Database at URL : mongodb://127.0.0.1:27017/apoiasedb`);
});

// var apoio = new Apoio({
//     _id: new mongoose.Types.ObjectId(),
//     valor: 999,
//     status: 'apoioPago',
//     campanha: null,
//     apoiador: null,
//     vencimento: {mes: 01, ano: 2018}
//   });

//   apoio.save((err) => { if (err) console.log(err); console.log('salvo!'); });


//Apoio.findOne().then((res) => {console.log(res); });
var res = Campanha.findById('5ae769c591d7981ec4806baa').then( async (res) => { return res; });
console.log(res);
//let res = query.exec((res) => { console.log(res); return res; });
//console.log(res);
//Apoio.find({'vencimento.mes': 1, 'vencimento.ano': 2018}).then((res)=> {console.log(res)});

//Apoio.findOne().select('_id').exec(function(apoio) { console.log(apoio); });


