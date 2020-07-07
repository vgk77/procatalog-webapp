import React, { useMemo } from 'react';
import {
	useTable,
	useSortBy,
	usePagination,
	useFilters,
} from 'react-table';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { StyledTable } from '../styles';

const Table = () => {
	const history = useHistory();
	const { data: tableData } = useSelector(store => store);

	const columns = useMemo(() => [{
		Header: 'Name',
		accessor: 'name',
	}], []);

	const {
		rows,
		headerGroups,
		getTableBodyProps,
		getTableProps,
		prepareRow,
	} = useTable(
		{
			data: useMemo(() => tableData, [tableData]),
			columns,
		},
		useFilters,
		useSortBy,
		usePagination,
	);

	const handleOnClickRow = data => {
		history.push(`/items/${data._id}`);
	};

	return (
		<StyledTable>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map(headerGroup => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<th {...column.getHeaderProps()}>{column.render('Header')}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map(row => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()} onClick={() => handleOnClickRow(row.original)}>
								{row.cells.map(cell => (
									<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
		</StyledTable>
	);
};

export default Table;
