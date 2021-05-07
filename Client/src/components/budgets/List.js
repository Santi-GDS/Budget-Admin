import React, { Fragment } from 'react';
import BudgetDetail from '../budgets/BudgetDetail';

const List = ({ operations, deleteOperation, editOperation }) => {
	return (
		<Fragment>
			<h2>Listado</h2>

			<ul className='budget-list'>
				{operations.length === 0 ? (
					<li className='budget-style'>
						<p>No se ingresó ningún valor</p>
					</li>
				) : (
					operations.map((operation) => (
						<BudgetDetail
							key={operation.id}
							operation={operation}
							deleteOperation={deleteOperation}
							editOperation={editOperation}
						/>
					))
				)}
			</ul>
		</Fragment>
	);
};

export default List;
