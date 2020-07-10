import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { filterInitState, dataInitState, ACTIONS, settingsInitState, categoriesInitState } from '../constants';
import thunk from 'redux-thunk';
import { calculateFilteredData, calculateCategoriesAlphabely } from '../utils';

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
	} else if (action.type === ACTIONS.FILTER_TOGGLE_ALL_TAGS) {
		const { value, categories, tags } = action.payload;
		const categoryTags = (categories.filter(data =>
			data.category === value
		)[0] || { tags: [] }).tags;
		
		const isAllAdded =  categoryTags.every(tag =>
			tags.findIndex(data =>
				data.category === (tag.category || value)
					&& data.value === (tag.value || tag)
			) > -1
		);

		categoryTags.forEach(tag => {
			const filteredIndex = tags.findIndex(data =>
				data.category === (tag.category || value)
					&& data.value === (tag.value || tag)
			);

			if (filteredIndex < 0) {
				tags.push({
					category: (tag.category || value),
					value: (tag.value || tag),
				});
			} else if (filteredIndex > -1 && isAllAdded) {
				tags.splice(filteredIndex, 1);
			}
		});
		return { ...state, tags };
	} else if (action.type === ACTIONS.FILTER_TOGGLE_TAG) {
		const { value, index, category, tags } = action.payload;
		if (index > -1) {
			tags.splice(index, 1);
		} else {
			const filteredIndex = tags.findIndex(data =>
				data.category === category && data.value === value
			);
			if (filteredIndex < 0) {
				tags.push({ category, value });
			} else {
				tags.splice(filteredIndex, 1);
			}
		}
		return { ...state, tags };
	}
	return state;
};

const selectedItem = (state = {}, action) => {
	if (action.type === ACTIONS.SET_SELECTED_ITEM) {
		return { ...action.payload };
	}
	return state;
};

const categories = (state = categoriesInitState, action) => {
	if (action.type === ACTIONS.SET_CATEGORIES) {
		return {
			byCategory: action.payload,
			byAlphabet: calculateCategoriesAlphabely(action.payload),
		};
	} else if (action.type === ACTIONS.UPDATE_CATEGORIES) {
		return { ...state, ...action.payload };
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
