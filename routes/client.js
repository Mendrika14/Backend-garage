const express = require("express");

const router = express.Router();

const userController = require('../controllers/client');

router.get('/',userController.getClient);
router.post('/create',userController.createClient);
router.put('/:id',userController.updateClient);
router.put('/activate/:id',userController.activateClient);



module.exports = router
