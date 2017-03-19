import { combineReducers } from "redux";

import fetchStockData from "./fetchStockDataReducer";
import selectedStock from "./selectedStockReducer";

export default combineReducers({
	fetchStockData: fetchStockData,
	selectedStock: selectedStock
})

