import React from 'react';
import Tag from './Tag';
import { useSelector } from 'react-redux';
import { StyledTagsConteiner } from '../styles';

const Tags = () => {
	const { filter } = useSelector(store => store);

	return (
		<StyledTagsConteiner>
			<div>Search in:</div>
			{filter.tags.map(value => (
				<Tag key={value} value={value} />
			))}
		</StyledTagsConteiner>
	);
};

export default Tags;
