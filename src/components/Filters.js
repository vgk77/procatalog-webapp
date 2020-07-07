import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, updateSettings } from '../actions';
import Category from './Category';
import { StyledFiltersContainer } from '../styles';
import Popup from 'reactjs-popup';

const Filters = () => {
	const { categories, settings } = useSelector(store => store);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);
    
	if (!settings.showFilters) {
		return null;
	}

	const handleOnClosePopup = () => {
		dispatch(updateSettings({ showFilters: false }));
	};

	return (
		<Popup
			open
			lockScroll
			closeOnEscape
			position="bottom center"
			onClose={handleOnClosePopup}
			contentStyle={{
				overflowY: 'auto',
				maxHeight: '80vh',
				backgroundColor: '#262626',
				borderColor: '#363636',
			}}
		>
			<StyledFiltersContainer>
			    {categories.map((value, index) => (
					<Category
						key={`category-${index}`}
						data={value}
					/>
				))}
			</StyledFiltersContainer>
		</Popup>
	);
};

export default Filters;
