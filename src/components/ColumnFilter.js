import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from '../styles';

const ColumnFilter = ({
	column: {
		filterValue,
		preFilteredRows,
		setFilter,
	},
}) => {
	const count = preFilteredRows.length;
	return (
		<Styled.ColumnFilterInput
			value={filterValue || ''}
			onChange={e => {
				setFilter(e.target.value || undefined);
			}}
			placeholder={`Search ${count} records...`}
		/>
	);
};

ColumnFilter.propTypes = {
	column: PropTypes.object.isRequired,
};

export default ColumnFilter;