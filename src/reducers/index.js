import { combineReducers } from "redux";

import fetchData from "./fetchDataReducer";
import stock from "./stockReducer";


export default combineReducers({
	fetchData: fetchData,
	stock
})

