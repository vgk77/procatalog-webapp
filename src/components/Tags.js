import React, { useState } from 'react';
import Tag from './Tag';
import { useSelector, useDispatch } from 'react-redux';
import { Styled } from '../styles';
import { ALL_CATEGORIES_TAG } from '../constants';
import { updateFilter } from '../actions';
import { FiX, FiMoreHorizontal } from 'react-icons/fi';

const Tags = () => {
	const { filter } = useSelector(store => store);
	const dispatch = useDispatch();
	const [isExpanded, setIsExpanded] = useState(false);

	const tagsCount = filter.tags.length;

	let tags = <Tag selected value={ALL_CATEGORIES_TAG} />;

	const handleOnClearFilters = () => {
		dispatch(updateFilter({ tags: [] }));
	};

	if (tagsCount) {
		tags = (
			<>
				{filter.tags.slice(0, isExpanded ? tagsCount : 5).map((value, index) => (
					<Tag key={`filter-${index}`} value={value} index={index} selected />
				))}
				{(tagsCount < 6 || isExpanded) && (
					<Tag
						selected
						value={(<FiX/>)}
						onClick={handleOnClearFilters}
					/>
				)}
				{tagsCount > 5 && (
					<Tag
						selected
						value={(<FiMoreHorizontal/>)}
						onClick={() => setIsExpanded(!isExpanded)}
					/>
				)}
			</>
		);
	}

	return (
		<Styled.TagsConteiner>
			<div>Search in:</div>
			{tags}
		</Styled.TagsConteiner>
	);
};

export default Tags;
