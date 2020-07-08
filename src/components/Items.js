import React from 'react';
import Table from './Table';
import Sidebar from './Sidebar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Item from './Item';
import { useSelector } from 'react-redux';

const Items = () => {
	const { data } = useSelector(store => store);

	if (!data.length) {
		return null;
	}

	return (
		<div style={{ display: 'flex' }}>
			<Sidebar />
			<div style={{
				flex: 3,
				background: '#4c4c5f',
				overflowY: 'auto',
				maxHeight: '80vh',
			}}>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Table} />
			    		<Route exact path="/items/:id" component={Item} />
					</Switch>
				</BrowserRouter>
			</div>
		</div>
	);
};

export default Items;
