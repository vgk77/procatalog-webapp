import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { filterInitState, dataInitState, ACTIONS, settingsInitState } from '../constants';
import thunk from 'redux-thunk';
import { calculateFilteredData } from '../utils';

const data = (state = dataInitState, action) => {
	if (action.type === ACTIONS.SET_DATA) {
		return { ...state, items: action.payload, filteredItems: action.payload };
	} else if (action.type === ACTIONS.CALCULATE_FILTERED_ITEMS) {
		return {
			...state,
			filteredItems: calculateFilteredData(state.items, action.payload),
		};
	}
	return state;
};

const filter = (state = filterInitState, action) => {
	if (action.type === ACTIONS.UPDATE_FILTER) {
		return { ...state, ...action.payload };
	} else if (action.type === ACTIONS.CALCULATE_FILTERS) {
		const data = [...action.payload];
		const result = [];
		data.forEach(value => {
			if (!value.filters) {
				return;
			}
			value.filters.forEach(filter => {
				if (result.some(value => value.name === filter.name)) {
					const index = result.findIndex(value =>
						value.name === filter.name,
					);
					if (index > -1) {
						result[index].values = [...new Set([
							...result[index].values,
							...filter.values,
						])];
					}
				} else {
					result.push(filter); 
				}
			});
		});
		return { ...state, sidebarFilters: result };
	} else if (action.type === ACTIONS.UPDATE_ACTIVE_FILTERS) {
		const { activeFilters } = state;
		const { value } = action.payload;
		const index = activeFilters.findIndex(activeFilter =>
			activeFilter === value,
		);
		if (index < 0) {
			activeFilters.push(value);
		} else {
			activeFilters.splice(index, 1);
		}
		return { ...state, activeFilters };
	}
	return state;
};

const selectedItem = (state = {}, action) => {
	if (action.type === ACTIONS.SET_SELECTED_ITEM) {
		return { ...action.payload };
	}
	return state;
};

const categories = (state = [], action) => {
	if (action.type === ACTIONS.SET_CATEGORIES) {
		return [ ...action.payload ];
	} else if (action.type === ACTIONS.UPDATE_CATEGORIES) {
		return [ ...state, ...action.payload ];
	}
	return state;
};

const settings = (state = settingsInitState, action) => {
	if (action.type === ACTIONS.UPDATE_SETTINGS) {
		return { ...state, ...action.payload };
	}
	return state;
};

const rootReducer = combineReducers({
	data,
	filter,
	categories,
	selectedItem,
	settings,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	rootReducer,
	composeEnhancers(
		applyMiddleware(thunk),
	),
);
