import React from 'react';
import PropTypes from 'prop-types';
import { StyledCategoryItemContainer, StyledCategoryItem } from '../styles';
import Tag from './Tag';

const CategoryItem = ({ data }) => {
	return (
		<StyledCategoryItemContainer>
			{data.category}
			<StyledCategoryItem>
    			{data.tags.map(tag => (
    				<Tag key={tag} value={tag} />
    			))}
			</StyledCategoryItem>
		</StyledCategoryItemContainer>
	);
};

CategoryItem.propTypes = {
	data: PropTypes.object.isRequired,
};

export default CategoryItem;
