import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, updateSettings } from '../actions';
import Category from './Category';
import { Styled } from '../styles';
import Popup from 'reactjs-popup';
import Toggle from './Toggle';

const Filters = () => {
	const { categories, settings } = useSelector(store => store);
	const dispatch = useDispatch();
	const [isAlphabetView, setIsAlphabetView] = useState(false);

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);
    
	if (!settings.showFilters) {
		return null;
	}

	const handleOnClosePopup = () => {
		dispatch(updateSettings({ showFilters: false }));
	};

	const handleOnSwitch = () => {
		setIsAlphabetView(!isAlphabetView);
	};

	return (
		<Popup
			open
			lockScroll
			closeOnEscape
			position="bottom center"
			onClose={handleOnClosePopup}
			arrow={false}
		>
			<>
				<Styled.FilterSwitchContainer>
					<span>Alphabetically</span>
					<Toggle
						name="filter"
						checked={isAlphabetView}
						onChange={handleOnSwitch}
					/>
				</Styled.FilterSwitchContainer>
				<Styled.FiltersContainer>
					{categories[isAlphabetView
						? 'byAlphabet'
						: 'byCategory'
					].map((value, index) => (
						<Category
							key={`category-${index}-${isAlphabetView}`}
							data={value}
							isAlphabetView={isAlphabetView}
						/>
					))}
				</Styled.FiltersContainer>
			</>
		</Popup>
	);
};

export default Filters;
