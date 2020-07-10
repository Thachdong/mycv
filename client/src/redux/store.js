import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers";
import { setCv } from "./actions/cvActions";

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
store.dispatch(setCv());

export default store;
