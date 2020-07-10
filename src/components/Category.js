import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from '../styles';
import Tag from './Tag';

const Category = ({ data, isAlphabetView }) => {
	return (
		<Styled.CategoryContainer>
			<Tag
				addAll
				isAlphabetView={isAlphabetView}
				value={data.category}
			/>
			<Styled.Category>
    			{data.tags.map(tag => isAlphabetView
					? (
						<Tag
							key={`${tag.value}-${tag.category}`}
							value={tag.value}
							category={tag.category}
							title={`${tag.value} (${tag.category})`}
						/>
					) : (
						<Tag
							key={tag}
							value={tag}
							category={data.category}
						/>
					)
				)}
			</Styled.Category>
		</Styled.CategoryContainer>
	);
};

Category.propTypes = {
	data: PropTypes.object.isRequired,
	isAlphabetView: PropTypes.bool,
};

export default Category;
