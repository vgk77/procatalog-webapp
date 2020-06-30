import { ACTIONS } from '../constants';

export const updateData = payload => ({
	type: ACTIONS.UPDATE_DATA,
	payload,
});

export const updateFilter = payload => ({
	type: ACTIONS.UPDATE_FILTER,
	payload,
});