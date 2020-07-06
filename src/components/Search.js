import React from 'react';
import { StyledSearchContainer, StyledSearch } from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter, updateSettings } from '../actions';
import Tags from './Tags';
import { FaAlignJustify, FaSearch } from 'react-icons/fa';

const Search = () => {
	const { filter } = useSelector(store => store);
	const dispatch = useDispatch();

	const handleOnChange = event => {
		dispatch(updateFilter({ search: event.target.value }));
	};

	const handleOnClickToggle = () => {
		dispatch(updateSettings({ showFilters: true }));
	};

	return (
		<div>
			<StyledSearchContainer>
				<FaAlignJustify
					size={24}
					style={{ alignSelf: 'center' }}
					onClick={handleOnClickToggle}
				/>
				<StyledSearch
					value={filter.search}
					onChange={handleOnChange}
				/>
				<FaSearch
					size={24}
					style={{
						alignSelf: 'center',
						color: 'black',
						marginLeft: -32,
					}}
				/>
			</StyledSearchContainer>
			<Tags />
		</div>
	);
};

export default Search;
