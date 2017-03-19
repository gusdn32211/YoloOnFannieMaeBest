import { combineReducers } from "redux";

import fetchData from "./fetchDataReducer";
import stock from "./stockReducer";
import yolo from "./yoloReducer";


export default combineReducers({
	fetchData: fetchData,
	stock: stock,
	yolo: yolo
})

