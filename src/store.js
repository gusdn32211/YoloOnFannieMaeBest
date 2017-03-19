import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";
import logger from "redux-logger"
import thunk from "redux-thunk";
import promise from "redux-promise-middleware"
import axios from "axios";

const middleware = applyMiddleware(promise(), thunk, logger())

const store = createStore(reducer, middleware);

store.dispatch({
	type: "FETCH_STOCK_DATA",
	payload: axios.get("http://yolo-on-fannie-mae.herokuapp.com/shares")
})

export default store;
