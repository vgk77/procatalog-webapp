import React from 'react';
import PropTypes from 'prop-types';
import { StyledCategoryContainer, StyledCategory } from '../styles';
import Tag from './Tag';

const Category = ({ data }) => {
	return (
		<StyledCategoryContainer>
			<Tag addAll value={data.category} />
			<StyledCategory>
    			{data.tags.map(tag => (
					<Tag
						key={tag}
						value={tag}
						category={data.category}
					/>
    			))}
			</StyledCategory>
		</StyledCategoryContainer>
	);
};

Category.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Category;
