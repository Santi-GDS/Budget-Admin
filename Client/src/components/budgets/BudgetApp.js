import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SideBar from '../layout/SideBar';
import TopBar from '../layout/TopBar';
import BudgetForm from './BudgetForm';
import List from './List';

const BudgetApp = () => {
	// State
	const [operations, setOperations] = useState([]);

	const {type} = useParams();

	useEffect(() => {
		fetch(`http://localhost:4000/api`)
			.then((res) => res.json())
			.then((data) => setOperations(data))
	}, [type]);

	// When adding a new operation
	const addOperation = (operation) => {
		setOperations([...operations, operation]);
	};

	// Delete operation by id
	const deleteOperation = (id) => {
		const newOperation = operations.filter((operation) => operation.id !== id);
		setOperations(newOperation);
	};

	// Edit operation by id
	const editOperation = (id) => {
		const selectedOperation = operations.find((operation) => operation.id === id);
		setOperations(selectedOperation);
	};

	return (
		<div className='app-container'>
			<SideBar />

			<div className='main-section'>
				<TopBar />
				<main>
					<BudgetForm addOperation={addOperation} />
					<div className='budget-container'>
						<List operations={operations} deleteOperation={deleteOperation} editOperation={editOperation} />
					</div>
				</main>
			</div>
		</div>
	);
};

export default BudgetApp;
