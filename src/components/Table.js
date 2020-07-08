import React, { useMemo, useState } from 'react';
import {
	useTable,
	useSortBy,
	usePagination,
	useFilters,
} from 'react-table';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { StyledTable } from '../styles';
import {
	FiChevronUp,
	FiChevronDown,
	FiChevronLeft,
	FiChevronRight,
	FiChevronsLeft,
	FiChevronsRight,
} from 'react-icons/fi';
import { tableInitialState } from '../constants';
import { fetchData } from '../actions';
import ColumnFilter from './ColumnFilter';

const Table = () => {
	const history = useHistory();
	const { data: tableData, filter } = useSelector(store => store);
	const dispatch = useDispatch();
	const [pageIndex, setPageIndex] = useState(1);

	const columns = useMemo(() => [{
		Header: 'Name',
		accessor: 'name',
	}], []);

	const defaultColumn = useMemo(() => ({
		Filter: ColumnFilter,
	}), []);

	const {
		headerGroups,
		getTableBodyProps,
		getTableProps,
		prepareRow,
		page,
		canPreviousPage,
	    canNextPage,
	    pageOptions,
	    pageCount,
	    gotoPage,
	    // nextPage,
	    // previousPage,
	    // state: { pageIndex },
	} = useTable(
		{
			data: useMemo(() => tableData, [tableData]),
			columns,
			defaultColumn,
			initialState: tableInitialState,
		},
		useFilters,
		useSortBy,
		usePagination,
	);

	const handleOnClickRow = data => {
		history.push(`/items/${data._id}`);
	};

	const handleOnFirstPage = () => {
		gotoPage(0);
	};

	const handleOnLastPage = () => {
		gotoPage(pageCount - 1);
	};

	const handleOnPrevPage = () => {
		// previousPage();
		setPageIndex(pageIndex - 1);
		dispatch(fetchData({ value: filter.search, page: pageIndex - 1 }));
	};

	const handleOnNextPage = () => {
		// nextPage();
		setPageIndex(pageIndex + 1);
		dispatch(fetchData({ value: filter.search, page: pageIndex + 1 }));
	};

	return (
		<StyledTable>
			<table {...getTableProps()}>
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
				<tbody {...getTableBodyProps()}>
					{page.map(row => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()} onClick={() => handleOnClickRow(row.original)}>
								{row.cells.map(cell => (
									<td {...cell.getCellProps()}>
										{cell.render('Cell')}
									</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
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
		</StyledTable>
	);
};

export default Table;
