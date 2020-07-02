import React from 'react';
import { StyledSearchContainer, StyledSearch } from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter, updateSettings } from '../actions';
import Tags from './Tags';

const Search = () => {
	const { filter, settings } = useSelector(store => store);
	const dispatch = useDispatch();

	const handleOnChange = event => {
		dispatch(updateFilter({ search: event.target.value }));
	};

	const handleOnClickToggle = () => {
		dispatch(updateSettings({ showFilters: !settings.showFilters }));
	};

	return (
		<div>
			<StyledSearchContainer>
				<button onClick={handleOnClickToggle}>show</button>
				<StyledSearch
					value={filter.search}
					onChange={handleOnChange}
				/>
			</StyledSearchContainer>
			<Tags />
		</div>
	);
};

export default Search;
