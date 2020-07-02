import { ACTIONS } from '../constants';
import { request } from '../utils';

export const updateData = payload => ({
	type: ACTIONS.UPDATE_DATA,
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

export const fetchCategories = () => async dispatch => {
	try {
		const response = await request({
			url: 'http://localhost:8000/categories',
		});
		dispatch(setCategories(response));
	} catch (e) {
		console.error(e);
	}
};
