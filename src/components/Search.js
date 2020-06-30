import React from 'react';
import { StyledSearch } from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../actions';

const Search = () => {
	const { filter } = useSelector(store => store);
	const dispatch = useDispatch();

	const handleOnChange = event => {
		dispatch(updateFilter({ search: event.target.value }));
	};

	return (
		<StyledSearch
			value={filter.search}
			onChange={handleOnChange}
		/>
	);
};

export default Search;
