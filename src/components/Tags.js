import React, { useState } from 'react';
import Tag from './Tag';
import { useSelector } from 'react-redux';
import { StyledTagsConteiner } from '../styles';
import { ALL_CATEGORIES_TAG } from '../constants';

const Tags = () => {
	const { filter } = useSelector(store => store);
	const [isExpanded, setIsExpanded] = useState(false);

	let tags = <Tag value={ALL_CATEGORIES_TAG} />;

	if (filter.tags.length) {
		tags = (
			<>
				{filter.tags.slice(0, isExpanded ? filter.tags.length : 5).map((value, index) => (
					<Tag key={value} value={value} index={index} />
				))}
				{filter.tags.length > 5 && (
					<Tag
						expand
						value='...'
						onClick={() => setIsExpanded(!isExpanded)}
					/>
				)}
			</>
		);
	}

	return (
		<StyledTagsConteiner>
			<div>Search in:</div>
			{tags}
		</StyledTagsConteiner>
	);
};

export default Tags;
