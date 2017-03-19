import { combineReducers } from "redux";
import fetchStockData from "./fetchStockDataReducer";
import fetchYoloStock from "./fetchYoloStockReducer";
import selectedStock from "./selectedStockReducer";
import selectedYoloStock from "./yoloReducer";

export default combineReducers({
	fetchStockData: fetchStockData,
	selectedStock: selectedStock,
	fetchYoloStock: fetchYoloStock,
	selectedYoloStock: selectedYoloStock
})

