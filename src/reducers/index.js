import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { filterInitState, ACTIONS, settingsInitState } from '../constants';
import thunk from 'redux-thunk';

const data = (state = [], action) => {
	if (action.type === ACTIONS.UPDATE_DATA) {
		return { ...state, ...action.payload };
	}
	return state;
};

const filter = (state = filterInitState, action) => {
	if (action.type === ACTIONS.UPDATE_FILTER) {
		return { ...state, ...action.payload };
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
	settings,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	rootReducer,
	composeEnhancers(
		applyMiddleware(thunk),
	),
);
