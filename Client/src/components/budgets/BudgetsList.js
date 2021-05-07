import React from 'react';
import Budget from './Budget';

const BudgetsList = () => {
	const operations = [
		{ name: 'Ingresos', link: 'income' },
		{ name: 'Egresos', link: 'outcome' },

	];
	return (
		<ul className='budget-list'>
			{operations.map((operation) => (
				<Budget budget={operation} />
			))}
		</ul>
	);
};

export default BudgetsList;
