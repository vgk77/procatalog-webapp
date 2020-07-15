import React, { useState, useMemo } from 'react';
import Table from './Table';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../actions';
import { useHistory } from 'react-router';

const ItemsTable = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [pageIndex, setPageIndex] = useState(1);
    const { data, filter } = useSelector(store => store);
    const columns = useMemo(() => [
        {
            Header: 'Name',
            accessor: 'name',
        },
    ], []);

    const handleOnClickRow = data => {
		history.push(`/items/${data._id}`);
	};

	const handleOnFirstPage = () => {
		// gotoPage(0);
	};

	const handleOnLastPage = () => {
		// gotoPage(pageCount - 1);
	};

	const handleOnPrevPage = () => {
		// previousPage();
		// setPageIndex(pageIndex - 1);
		dispatch(fetchData({ value: filter.search, page: pageIndex - 1 }));
	};

	const handleOnNextPage = () => {
		// nextPage();
		// setPageIndex(pageIndex + 1);
		dispatch(fetchData({ value: filter.search, page: pageIndex + 1 }));
    };

    return (
        <Table
            showHeader
            showPagination
            data={useMemo(() =>
                data.filteredItems, [data.filteredItems]
            )}
            columns={columns}
            pageIndex={pageIndex}
            handleOnClickRow={handleOnClickRow}
            handleOnFirstPage={handleOnFirstPage}
            handleOnLastPage={handleOnLastPage}
            handleOnPrevPage={handleOnPrevPage}
            handleOnNextPage={handleOnNextPage}
        />    
    );
};

export default ItemsTable;
