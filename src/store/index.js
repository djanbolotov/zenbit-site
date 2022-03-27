import { createStore, combineReducers, applyMiddleware } from 'redux';
import {feedbackReducer} from './reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    feedbacks: feedbackReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunk));