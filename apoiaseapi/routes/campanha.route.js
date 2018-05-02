var router = require( 'express').Router();
var campanhaController =  require( '../controllers/campanha.controller');

router.get('/:ano/:mes', campanhaController.getCampanhas);

module.exports = router;