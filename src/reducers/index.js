import { combineReducers } from "redux";
import fetchStockData from "./fetchStockDataReducer";
import fetchYoloStock from "./fetchYoloStockReducer";
import selectedStock from "./selectedStockReducer";
import yolo from "./yoloReducer";

export default combineReducers({
	fetchStockData: fetchStockData,
	selectedStock: selectedStock,
	fetchYoloStock: fetchYoloStock,
	yolo: yolo
})

