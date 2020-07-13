import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateFilters, updateActiveFilters, calculateFilteredItems } from '../actions';
import Popup from 'reactjs-popup';
import { Styled } from '../styles';

const Sidebar = () => {
	const dispatch = useDispatch();
	const { data, filter } = useSelector(store => store);

	useEffect(() => {
		dispatch(calculateFilters(data.items));
	}, [dispatch, data.items]);

	useEffect(() => {
		dispatch(calculateFilteredItems(filter.activeFilters));
	}, [dispatch, filter]);

	const handleOnCheck = event => {
		dispatch(updateActiveFilters({ value: event.target.value }));
	};

	const getFilters = (data, isSlice = true) =>
		(data.slice(0, isSlice && data.length > 5
			? 5
			: data.length
		).map(value => (
			<div key={`filter-${value}`} style={{ display: 'flex' }}>
				<input
					type="checkbox"
					value={value}
					onClick={handleOnCheck}
					checked={filter.activeFilters.includes(value)}
				/>
				<div>{value}</div>
			</div>
		)));

	if (!filter.sidebarFilters.length) {
		return null;
	}

	return (
		<Styled.SidebarContainer>
			<div>Filter</div>
			{filter.sidebarFilters.map(value => (
				<Styled.FilterCategory key={`filter-category-${value.name}`}>
					<div style={{ alignSelf: 'start' }}>{value.name}</div>
					{getFilters(value.values)}
					{value.values.length > 5 && (
						<Popup
							trigger={<div style={{ alignSelf: 'start' }}>more...</div>}
							position="right center"
							arrow={false}
						>
							{getFilters(value.values, false)}
						</Popup>
					)}
				</Styled.FilterCategory>
			))}
		</Styled.SidebarContainer>
	);
};

export default Sidebar;
