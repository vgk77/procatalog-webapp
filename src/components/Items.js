import React from 'react';
import ItemsTable from './ItemsTable';
import Sidebar from './Sidebar';
import { Route, Switch } from 'react-router-dom';
import Item from './Item';
import { useSelector } from 'react-redux';
import { Styled } from '../styles';

const Items = () => {
	const { data, selectedItem } = useSelector(store => store);

	const isShow = data.items.length || Object.keys(selectedItem).length;

	return (
		<Styled.ItemsRoot display={isShow ? 'flex' : 'none'}>
			<Sidebar />
			<Styled.ItemsContainer>
				<Switch>
					<Route exact path="/" component={ItemsTable} />
		    		<Route exact path="/items/:id" component={Item} />
				</Switch>
			</Styled.ItemsContainer>
		</Styled.ItemsRoot>
	);
};

export default Items;
