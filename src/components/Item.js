import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const Item = () => {
	const { id } = useParams();
	const { data } = useSelector(store => store);
	const [item, setItem] = useState(null);

	useEffect(() => { 
		setItem(data.find(value =>
			value._id === id
		));
	}, [data, id]);
    
	if (!item) {
		return <div>item not found</div>;
	}

	return (
		<div style={{ textAlign: 'left', padding: 20 }}>
			<div>Index: {item.index}</div>
			<div>Name: {item.name}</div>
			<div>Category: {item.category}</div>
			<ul>Tags: {item.tags.map(value => (
				<li>{value}</li>
			))}</ul>
		</div>
	);
};

export default Item;
