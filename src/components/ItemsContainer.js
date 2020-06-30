import React from 'react';
import { TEST_CATEGORIES } from '../testData';
import { StyledItemsContainer } from '../styles';
import CategoryItem from './CategoryItem';

const ItemsContainer = () => {
	return (
		<StyledItemsContainer>
		    {TEST_CATEGORIES.map(value => (
				<CategoryItem data={value} />
			))}
		</StyledItemsContainer>
	);
};

export default ItemsContainer;
