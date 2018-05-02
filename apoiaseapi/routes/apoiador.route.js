var router = require( 'express').Router();
var apoiadorController =  require( '../controllers/apoiador.controller');

router.get('/:ano/:mes', apoiadorController.getApoiadores);

module.exports = router;