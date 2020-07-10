import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../actions';
import { ALL_CATEGORIES_TAG } from '../constants';
import { isFunction } from '../utils';

const Tag = ({
	value,
	category,
	onClick,
	index,
	selected,
	addAll,
	title,
	isAlphabetView,
}) => {
	const dispatch = useDispatch();
	const { filter, categories } = useSelector(store => store);

	const hangleOnClick = () => {
		if (value === ALL_CATEGORIES_TAG) {
			return;
		}

		const { tags } = filter;

		if (isFunction(onClick)) {
			onClick();
		} else if (addAll) {
			const categoryTags = (categories[
				isAlphabetView
					? 'byAlphabet'
					: 'byCategory'
			].filter(data =>
				data.category === value
			)[0] || { tags: [] }).tags;
			
			const isAllAdded =  categoryTags.every(tag =>
				tags.findIndex(data =>
					data.category === (tag.category || value)
						&& data.value === (tag.value || tag)
				) > -1
			);

			categoryTags.forEach(tag => {
				const filteredIndex = tags.findIndex(data =>
					data.category === (tag.category || value)
						&& data.value === (tag.value || tag)
				);

				if (filteredIndex < 0) {
					tags.push({
						category: (tag.category || value),
						value: (tag.value || tag),
					});
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
		<Styled.Tag
			onClick={hangleOnClick}
			selected={selected || isSelected}
			category={addAll}
		>
			{title || value.value || value}
		</Styled.Tag>
	);
};

Tag.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
	]),
	category: PropTypes.string,
	onClick: PropTypes.func,
	index: PropTypes.number,
	selected: PropTypes.bool,
	addAll: PropTypes.bool,
	title: PropTypes.string,
	isAlphabetView: PropTypes.bool,
};

export default Tag;
