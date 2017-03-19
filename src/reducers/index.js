import { combineReducers } from "redux";

import fetchStockData from "./fetchStockDataReducer";

export default combineReducers({
	fetchStockData: fetchStockData
})

