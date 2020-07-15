import React, { useMemo } from 'react';
import {
	useTable,
	useSortBy,
	usePagination,
	useFilters,
} from 'react-table';
import { Styled } from '../styles';
import {
	FiChevronUp,
	FiChevronDown,
	FiChevronLeft,
	FiChevronRight,
	FiChevronsLeft,
	FiChevronsRight,
} from 'react-icons/fi';
import { tableInitialState } from '../constants';
import ColumnFilter from './ColumnFilter';
import PropTypes from 'prop-types';

const Table = ({
	data,
	columns,
	handleOnClickRow,
	handleOnFirstPage,
	handleOnLastPage,
	handleOnPrevPage,
	handleOnNextPage,
	showPagination,
	showHeader,
	pageIndex,
}) => {
	const {
		headerGroups,
		getTableBodyProps,
		getTableProps,
		prepareRow,
		page,
		canPreviousPage,
	    canNextPage,
	    pageOptions,
	    // pageCount,
	    // gotoPage,
	    // nextPage,
	    // previousPage,
	    // state: { pageIndex },
	} = useTable(
		{
			data: useMemo(() => data, [data]),
			columns: useMemo(() => columns, [columns]),
			defaultColumn: useMemo(() => ({
				Filter: ColumnFilter,
			}), []),
			initialState: tableInitialState,
		},
		useFilters,
		useSortBy,
		usePagination,
	);

	return (
		<Styled.Table>
			<table {...getTableProps()}>
				{showHeader && (
					<thead>
						{headerGroups.map(headerGroup => (
							<>
								<tr className="header" {...headerGroup.getHeaderGroupProps()}>
									{headerGroup.headers.map(column => (
										<th {...column.getHeaderProps(column.getSortByToggleProps())}>
											{column.render('Header')}
											{column.isSorted
					                    	  ? column.isSortedDesc
						                        ? <FiChevronUp/>
						                        : <FiChevronDown/>
						                      : null
										    }
										</th>
									))}
								</tr>
								<tr className="header" {...headerGroup.getHeaderGroupProps()}>
									{headerGroup.headers.map(column => (
										<th {...column.getHeaderProps()}>
											{column.canFilter
												? column.render('Filter')
												: null
											}
										</th>
									))}
								</tr>
							</>
						))}
					</thead>
				)}
				<tbody {...getTableBodyProps()}>
					{page.map(row => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()} onClick={() => handleOnClickRow(row.original)}>
								{row.cells.map(cell => (
									<td {...cell.getCellProps()} style={{ width: '80%' }}>
										{cell.render('Cell')}
									</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
			{showPagination && (
				<div className="pagination">
			        <button onClick={handleOnFirstPage} disabled={!canPreviousPage}>
					  	{<FiChevronsLeft/>}
			        </button>
			        <button onClick={handleOnPrevPage} disabled={canPreviousPage}>
					  	{<FiChevronLeft/>}
			        </button>
					<span>
		            	{`Page ${pageIndex} of ${pageOptions.length}`}
			        </span>
			        <button onClick={handleOnNextPage} disabled={canNextPage}>
					  	{<FiChevronRight/>}
			        </button>
			        <button onClick={handleOnLastPage} disabled={!canNextPage}>
					  	{<FiChevronsRight/>}
			        </button>
		        </div>
			)}
		</Styled.Table>
	);
};

Table.defaultProps = {
	handleOnClickRow: () => ({}),
	handleOnFirstPage: () => ({}),
	handleOnLastPage: () => ({}),
	handleOnPrevPage: () => ({}),
	handleOnNextPage: () => ({}),
};

Table.propTypes = {
	data: PropTypes.array.isRequired,
	columns: PropTypes.array.isRequired,
	handleOnClickRow: PropTypes.func,
	handleOnFirstPage: PropTypes.func,
	handleOnLastPage: PropTypes.func,
	handleOnPrevPage: PropTypes.func,
	handleOnNextPage: PropTypes.func,
	pageIndex: PropTypes.number,
	showPagination: PropTypes.bool,
	showHeader:	PropTypes.bool,
};

export default Table;
