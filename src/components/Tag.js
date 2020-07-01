import React from 'react';
import PropTypes from 'prop-types';
import { StyledTag } from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../actions';

const Tag = ({ value, category, expand, onClick, index }) => {
	const dispatch = useDispatch();
	const { filter } = useSelector(store => store);

	const hangleOnClick = () => {
		if (expand) {
			onClick();
		} else {
			const { tags } = filter;
			if (index > -1) {
				tags.splice(index, 1);
			} else {
				const filtered = tags.filter(data =>
					data.category === category && data.value === value
				);
				if (!filtered.length) {
					tags.push({ category, value });
				}
			}
			dispatch(updateFilter({ tags }));
		}
	};

	return (
		<StyledTag onClick={hangleOnClick}>{value.value || value}</StyledTag>
	);
};

Tag.defaultProps = {
	onClick: () => ({}),
};

Tag.propTypes = {
	value: PropTypes.string.isRequired,
	category: PropTypes.string,
	expand: PropTypes.bool,
	onClick: PropTypes.func,
	index: PropTypes.number,
};

export default Tag;
