const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const { check } = require('express-validator');

router.post('/', 
	[
		check('concept', 'Debe ingresar un concepto').not().isEmpty(),
		check('amount', 'Debe ingresar un valor mayor a 0').isFloat({min:1}),
		check('type', 'Debe seleccionar una de las opciones').not().isEmpty()
	],
 apiController.createOperation);

 router.get('/incomes', apiController.listIncomes);
 router.get('/expenses', apiController.listExpenses);

 router.put('/:id', apiController.edit);

 router.delete('/:id', apiController.deleteOperations);

module.exports = router;
