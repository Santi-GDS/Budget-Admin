const { Operations } = require('../database/models');
const { validationResult } = require('express-validator');

module.exports = {

// Create new income	
	createOperation: async (req, res) => {
		const body = req.body;

		const errors = validationResult(req);
			if(!errors.isEmpty()) {
				return res.status(400).json({errors: errors.array()})
			}

		try {
			const newOperation =  await Operations.create({
				concept: body.concept,
				amount: body.amount,
				type: body.type
			}); 

			res.json({
				msg: {
					msg:'Ingreso creado con éxito',
				},
				meta: {
					status : 'success',
				},
				data: {
					newOperation,
				}
			});
		}
			
			catch(error) {
				res.status(500).json({
					msg: {
						msg: 'El ingreso no pudo ser creado',
					},
					meta: {
						status : 'error',
					},
					data: {
						error,
					} 
				});	
			}		
		},

		// Get all the operations
	listOperations: async (req, res) => {
		try {
			const allOperations = await Operations.findAll();
			res.json({allOperations});

		} catch (error) {
			console.log(error);
			res.status(500).send('Hubo un error')
		}
	},
	
	// Get all the expenses
	listExpenses: async (req, res) => {
		try {
			const expenses = await Operations.findAll({ 
				where: {
						type: 'Egreso'
			}});
			res.json({expenses});

		} catch (error) {
			console.log(error);
			res.status(500).send('Hubo un error')
		}
	},
	
	// Get all incomes
	listIncomes: async (req, res) => {
		try {
			const incomes = await Operations.findAll({ 
				where: {
						type: 'Ingreso'
			}});
			res.json({incomes});

		} catch (error) {
			console.log(error);
			res.status(500).send('Hubo un error')
		}
	},
	// Edit operations
	edit: async(req, res) => {
		const body = req.body;

		const errors = validationResult(req);
		if(!errors.isEmpty()) {
			return res.status(400).json({errors: errors.array()})
		}

	// Get operation data
		try {

			// Check operation ID
			const id = req.params.id;
			let updateOperation = await Operations.findByPk(id);

			//If the operation exists
			if(!updateOperation) {
				return res.status(404).json({ msg: 'No hay resultados'});
			};

			//Edit
			updateOperation = await Operations.update({
				concept: body.concept,
				amount: body.amount,
				type: body.type
			}, {
				where: {
					id: id
				}
			});
			res.json({updateOperation});

		} catch (error) {
			console.log(error);
			res.status(500).send('Error en el servidor');
		}
	},
// Delete an operation
	deleteOperations: async (req, res) => {
		try {

			// Check operation ID
			const id = req.params.id;
			let deleteOperation = await Operations.findByPk(id);

			//If the operation exists
			if(!deleteOperation) {
				return res.status(404).json({ msg: 'Ingreso no encontrado'});
			};

			//Delete operation
			deleteOperation = await Operations.destroy({
				where: {
					id: id
				}
			});
			res.json({deleteOperation});

		} catch (error) {
			console.log(error);
			res.status(500).send('Error en el servidor');
		}
	},
};