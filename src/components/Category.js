import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from '../styles';
import Tag from './Tag';

const Category = ({ data }) => {
	return (
		<Styled.CategoryContainer>
			<Tag addAll value={data.category} />
			<Styled.Category>
    			{data.tags.map(tag => (
					<Tag
						key={tag}
						value={tag}
						category={data.category}
					/>
    			))}
			</Styled.Category>
		</Styled.CategoryContainer>
	);
};

Category.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Category;
