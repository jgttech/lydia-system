import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import lexicons from "./reducers/lexiconReducers";
import modalEntity from "./reducers/modalEntityReducers";
import modalPeek from "./reducers/modelPeekReducers";

export default createStore(
    combineReducers({
        lexicons,
        modalEntity,
        modalPeek
    }),
    applyMiddleware(
        createLogger()
    )
);