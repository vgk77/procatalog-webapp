import { ACTIONS } from '../constants';
import { request } from '../utils';

export const setData = payload => ({
	type: ACTIONS.SET_DATA,
	payload,
});

export const updateFilter = payload => ({
	type: ACTIONS.UPDATE_FILTER,
	payload,
});

export const updateCategories = payload => ({
	type: ACTIONS.UPDATE_CATEGORIES,
	payload,
});

export const setCategories = payload => ({
	type: ACTIONS.SET_CATEGORIES,
	payload,
});

export const updateSettings = payload => ({
	type: ACTIONS.UPDATE_SETTINGS,
	payload,
});

export const updateSelectedItem = payload => ({
	type: ACTIONS.SET_SELECTED_ITEM,
	payload,
});

export const fetchData = payload => async dispatch => {
	try {
		const { value, page } = payload;
		const response = await request({
			url: `${process.env.REACT_APP_BASE_URL}/items?q=${value}&&_page=${page}&&_limit=20`,
		});
		dispatch(setData(response));
	} catch (e) {
		console.error(e);
	}
};

export const fetchCategories = () => async dispatch => {
	try {
		const response = await request({
			url: `${process.env.REACT_APP_BASE_URL}/categories`,
		});
		dispatch(setCategories(response));
	} catch (e) {
		console.error(e);
	}
};

export const fetchSelectedItem = id => async dispatch => {
	try {
		const response = await request({
			url: `${process.env.REACT_APP_BASE_URL}/items?_id=${id}`
		});
		dispatch(updateSelectedItem(response[0]));
	} catch (e) {
		console.error(e);
	}
};
