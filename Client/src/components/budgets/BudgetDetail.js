import React from 'react';

const BudgetDetail = ({ operation, deleteOperation, editOperation }) => {
	return (
		<li className='budget-style shadow'>
			<p className='item-list'>
				{operation.concept}
				<span className='amount-list'> ${operation.amount}</span>
			</p>
			<div className='state'>
				{operation.type === 'income' ? (
					<button type='button' className='btn income'>
						Ingreso
					</button>
				) : (
					<button type='button' className='btn outcome'>
						Egreso
					</button>
				)}
			</div>
			<div className='actions'>
				<button
					type='button'
					className='btn btn-primary'
					onClick={() => editOperation(operation.id)}
				>
					Editar
				</button>

				<button
					type='button'
					className='btn btn-secondary'
					onClick={() => deleteOperation(operation.id)}
				>
					Eliminar
				</button>
			</div>
		</li>
	);
};

export default BudgetDetail;
