var router = require('express').Router();
var campanha = require ("./campanha.route");
var apoiador = require('./apoiador.route');

//Use the Routes
router.use('/campanha/', campanha);
router.use('/apoiador/', apoiador);


router.use('/', (req, res) => {

    res.send(` utilize assim: localhost:3000/campanha/ano/mes `);
});

module.exports = router;