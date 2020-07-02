import React from 'react';
import PropTypes from 'prop-types';
import { StyledTag } from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../actions';
import { ALL_CATEGORIES_TAG } from '../constants';

const Tag = ({ value, category, onClick, index, selected, addAll }) => {
	const dispatch = useDispatch();
	const { filter, categories } = useSelector(store => store);

	const hangleOnClick = () => {
		if (value === ALL_CATEGORIES_TAG) {
			return;
		}

		const { tags } = filter;

		if (onClick && {}.toString.call(onClick) === '[object Function]') {
			onClick();
		} else if (addAll) {
			const categoryTags = categories.filter(data =>
				data.category === value
			)[0].tags;
			
			const isAllAdded =  categoryTags.every(tag =>
				tags.findIndex(data =>
					data.category === value && data.value === tag
				) > -1
			);

			categoryTags.forEach(tag => {
				const filteredIndex = tags.findIndex(data =>
					data.category === value && data.value === tag
				);

				if (filteredIndex < 0) {
					tags.push({ category: value, value: tag });
				} else if (filteredIndex > -1 && isAllAdded) {
					tags.splice(filteredIndex, 1);
				}
			});
			dispatch(updateFilter({ tags }));
		} else {
			if (index > -1) {
				tags.splice(index, 1);
			} else {
				const filteredIndex = tags.findIndex(data =>
					data.category === category && data.value === value
				);
				if (filteredIndex < 0) {
					tags.push({ category, value });
				} else {
					tags.splice(filteredIndex, 1);
				}
			}
			dispatch(updateFilter({ tags }));
		}
	};

	const isSelected = filter.tags.some(data =>
		data.category === category
		&& data.value === value
	);

	return (
		<StyledTag
			onClick={hangleOnClick}
			selected={selected || isSelected}
		>
			{value.value || value}
		</StyledTag>
	);
};

Tag.propTypes = {
	value: PropTypes.string.isRequired,
	category: PropTypes.string,
	onClick: PropTypes.func,
	index: PropTypes.number,
	selected: PropTypes.bool,
	addAll: PropTypes.bool,
};

export default Tag;
