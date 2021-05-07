import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BudgetApp from './components/budgets/BudgetApp';

function App() {

	return (
		<Router>
			<Switch>
				{/* <Route exact path='/' component={Login} />
				<Route exact path='/new-account' component={NewAccount} /> */}
				<Route exact path='/' component={BudgetApp} /> */
			</Switch>
		</Router>
	);
}

export default App;
