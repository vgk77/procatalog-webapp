import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTag, toggleAllTags } from '../actions';
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
			dispatch(toggleAllTags({
				tags,
				value,
				categories: categories[isAlphabetView
					? 'byAlphabet'
					: 'byCategory'
				],
			}));
		} else {
			dispatch(toggleTag({ value, index, category, tags }));
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
