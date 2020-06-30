import React from 'react';
import PropTypes from 'prop-types';
import { StyledTag } from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../actions';

const Tag = ({ value }) => {
	const dispatch = useDispatch();
	const { filter } = useSelector(store => store);

	const hangleOnClick = () => {
		const { tags } = filter;
		tags.push(value);
		dispatch(updateFilter({ tags }));
	};

	return (
		<StyledTag onClick={hangleOnClick}>{value}</StyledTag>
	);
};

Tag.propTypes = {
	value: PropTypes.string.isRequired,
};

export default Tag;
