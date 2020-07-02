import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../actions';
import Category from './Category';
import { StyledFiltersContainer } from '../styles';

const Filters = () => {
	const { categories, settings } = useSelector(store => store);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);
    
	if (!settings.showFilters) {
		return null;
	}

	return (
		<StyledFiltersContainer>
		    {categories.map(value => (
				<Category data={value} />
			))}
		</StyledFiltersContainer>
	);
};

export default Filters;
