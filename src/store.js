import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";
import logger from "redux-logger"
import thunk from "redux-thunk";
import promise from "redux-promise-middleware"
import axios from "axios";

const middleware = applyMiddleware(promise(), thunk, logger())

const store = createStore(reducer, middleware);

store.dispatch({
	type: "FETCH_DATA",
	payload: axios.get("http://rest.learncode.academy/api/wstern/users")
})

export default store;
