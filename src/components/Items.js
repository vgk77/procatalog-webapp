import React, { useEffect } from 'react';
import Table from './Table';
import Sidebar from './Sidebar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Item from './Item';
import { useDispatch } from 'react-redux';
import { fetchData } from '../actions';

const Items = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	return (
		<div style={{ display: 'flex' }}>
			<Sidebar />
			<div style={{ flex: 3, background: '#5757de' }}>
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
