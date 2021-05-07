import React from 'react';
import { Link } from 'react-router-dom';

const Budget = ({ budget }) => {
	return (
		<li>
			<Link to={budget.link} className='btn btn-blank'>
				{budget.name}
			</Link>
		</li>
	);
};

export default Budget;
