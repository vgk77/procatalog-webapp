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
			<div style={{ display: 'flex' }}>
				<img src={selectedItem.mainImage} alt="mainImage" style={{ height: 256 }} />
				<div style={{ padding: 10 }}>
					<div>Name: {selectedItem.name}</div>
					<div>Category: {selectedItem.category}</div>
				</div>
			</div>
			<div style={{ display: 'flex', margin: '10px 0' }}>
				{selectedItem.images.map(value => (
					<img
						key={value}
						src={value}
						alt={value}
						style={{
							height: 100,
							margin: 2,
						}}
					/>
				))}
			</div>
			<div style={{ display: 'flex' }}>
				<ul>
					Tags:
					{selectedItem.tags.map(value => (
						<li>{value}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Item;
