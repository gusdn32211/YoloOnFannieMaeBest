import axios from "axios";

export function setSelectedYolo(stockName) {
	return {
		type: 'SET_SELECTED_YOLO',
		payload: stockName
	}
}

export function clearSelectedYoloStock() {
	return {
		type: 'CLEAR_SELECTED_YOLO_STOCK'
	}
}

export function getYoloStock() {
	return {
		type: "FETCH_YOLO_STOCK",
		payload: axios.get("http://yolo-on-fannie-mae.herokuapp.com/yolo_buy")
	}
}

// store.dispatch({
// 	type: "FETCH_YOLO_STOCK",
// 	payload: axios.get("http://yolo-on-fannie-mae.herokuapp.com/yolo_buy")
// })