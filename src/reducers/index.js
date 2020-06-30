import { combineReducers, compose, createStore } from 'redux';
import { filterInitState, ACTIONS } from '../constants';

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

const rootReducer = combineReducers({
	data,
	filter,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	rootReducer,
	composeEnhancers(),
);
