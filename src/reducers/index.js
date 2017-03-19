import { combineReducers } from "redux";
import fetchStockData from "./fetchStockDataReducer";
import selectedStock from "./selectedStockReducer";
import yolo from "./yoloReducer";

export default combineReducers({
	fetchStockData: fetchStockData,
	selectedStock: selectedStock,
	yolo: yolo
})

