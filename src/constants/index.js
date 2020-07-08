export const ALL_CATEGORIES_TAG = 'ALL_CATEGORIES';

export const ACTIONS = {
	UPDATE_FILTER: 'UPDATE_FILTER',
	SET_DATA: 'SET_DATA',
	SET_CATEGORIES: 'SET_CATEGORIES',
	UPDATE_CATEGORIES: 'UPDATE_CATEGORIES',
	UPDATE_SETTINGS: 'UPDATE_SETTINGS',
	SET_SELECTED_ITEM: 'SET_SELECTED_ITEM',
};

export const tableInitialState = {
	pageIndex: 0,
	pageSize: 50,
};

export const filterInitState = {
	search: '',
	tags: [],
};

export const settingsInitState = {
	showFilters: false,
};

export const METHODS = {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	PATCH: 'PATCH',
	DELETE: 'DELETE',
};

export const DEFAULT_HEADERS = {
	Accept: 'application/json',
};
