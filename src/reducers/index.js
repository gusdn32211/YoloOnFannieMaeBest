import { combineReducers } from "redux";

import fetchData from "./fetchDataReducer";
// import login from "./loginReducer";

export default combineReducers({
	fetchData: fetchData,
	login: {}
})

