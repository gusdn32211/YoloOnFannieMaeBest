import { combineReducers } from "redux";
import fetchStockData from "./fetchStockDataReducer";
import yolo from "./yoloReducer";


export default combineReducers({
	fetchStockData: fetchStockData,
	yolo: yolo
})

