import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSelectedItem } from '../actions';

const Item = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { selectedItem } = useSelector(store => store);

	useEffect(() => {
		dispatch(fetchSelectedItem(id));
	}, [dispatch, id]);
    
	if (!Object.keys(selectedItem).length || selectedItem.isEmpty) {
		return <div>item not found</div>;
	}

	return (
		<div style={{ textAlign: 'left', padding: 20 }}>
			<div>Index: {selectedItem.index}</div>
			<div>Name: {selectedItem.name}</div>
			<div>Category: {selectedItem.category}</div>
			<ul>Tags: {selectedItem.tags.map(value => (
				<li>{value}</li>
			))}</ul>
		</div>
	);
};

export default Item;
