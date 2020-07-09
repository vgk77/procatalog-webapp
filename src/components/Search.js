import React, { useState } from 'react';
import { Styled } from '../styles';
import { useDispatch } from 'react-redux';
import { updateSettings, fetchData, updateFilter } from '../actions';
import { FiAlignJustify, FiSearch, FiX } from 'react-icons/fi';
import Tags from './Tags';

const Search = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const handleOnChange = event => {
		setValue(event.target.value);
	};

	const handleOnKeyDown = event => {
		if (event.key === 'Enter') {
			dispatch(fetchData({ value }));
			dispatch(updateFilter({ search: value }));
	    }
	};

	const handleOnClickSearch = () => {
		dispatch(fetchData({ value }));
		dispatch(updateFilter({ search: value }));
	};

	const handleOnClickDelete = () => {
		setValue('');
	};

	const handleOnClickToggle = () => {
		dispatch(updateSettings({ showFilters: true }));
	};

	return (
		<div>
			<Styled.SearchContainer>
				<FiAlignJustify
					size={24}
					style={{ alignSelf: 'center' }}
					onClick={handleOnClickToggle}
				/>
				<Styled.Search
					value={value}
					onChange={handleOnChange}
					onKeyDown={handleOnKeyDown}
				/>
				{!!value && (
					<Styled.SearchIconsContainer>
						<FiSearch
							size={24}
							onClick={handleOnClickSearch}
							style={{ alignSelf: 'center' }}
						/>
						<FiX
							size={24}
							onClick={handleOnClickDelete}
							style={{ alignSelf: 'center' }}
						/>
					</Styled.SearchIconsContainer>
				)}
			</Styled.SearchContainer>
			<Tags />
		</div>
	);
};

export default Search;
