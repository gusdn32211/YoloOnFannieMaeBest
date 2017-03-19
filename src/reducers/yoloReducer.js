const yoloReducer = (state="", action) => {
	switch(action.type) {
		case "SET_SELECTED_YOLO": {
			return action.payload
			break;
		}
		case "CLEAR_SELECTED_YOLO_STOCK": {
			return ""
		}
	}
	return state;
};

export default yoloReducer