import React, { Fragment, useState } from 'react';
import Error from '../Error';

const BudgetForm = ({ addOperation }) => {
	// Operation State
	const [operation, setOperation] = useState({
		concept: '',
		amount: '',
		type: ''
	});
	const [error, setError] = useState(false);

	// Extraction
	const { concept, amount, type } = operation;

	// Read form's content
	const onChangeOperation = (e) => {
		setOperation({
			...operation,
			[e.target.name]: e.target.value,
		});
	};

	// When submitting
	const onSubmitOperation = (e) => {
		e.preventDefault();

		// Validation for errors
		if (concept === '' || amount === '' || type === '') {
			setError(true);
			return;
		}
		//Validation without errors
		setError(false);

		//Create operation
		const createOperation = {
			concept,
			amount,
			type
		};

		//Send operation to other component
		addOperation(createOperation);

		// Form restart
		setOperation({
			concept: '',
			amount: '',
			type: ''
		});
	};

	return (
		<div className='forms'>
			{error ? <Error /> : null}
			<form className='new-budget-form' onSubmit={onSubmitOperation}>
				<div className='input-container'></div>
				<input
					type='text'
					className='input-text'
					placeholder='Ingresar concepto'
					name='concept'
					value={concept}
					onChange={onChangeOperation}
				/>
				<input
					type='number'
					className='input-text'
					placeholder='Ingresar monto'
					name='amount'
					value={amount}
					onChange={onChangeOperation}
				/>
				<select
					name='type'
					value={type}
					onChange={onChangeOperation}
					className='input-text'
				>
					<option value=''>-- Seleccionar tipo --</option>
					<option value='income'>Ingreso</option>
					<option value='outcome'>Egreso</option>
				</select>
				<input
					type='submit'
					className='btn btn-block btn-submit btn-primary'
					value='Agregar Presupuesto'
				/>
			</form>
		</div>
	);
};

export default BudgetForm;
