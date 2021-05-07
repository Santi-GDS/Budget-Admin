import React from 'react';
import BudgetsList from '../budgets/BudgetsList';
import Balance from '../budgets/Balance';

const SideBar = () => {
	return (
		<aside>
			<h1>
				ADMIN<span>de</span>PRESUPUESTOS
			</h1>
			<div className='budgets'>
				<h2>Mis Presupuestos</h2>
				<BudgetsList />
			</div>
			<div className='budgets'>
				<h2>Mi Balance</h2>
				<Balance />
			</div>
		</aside>
	);
};

export default SideBar;
