const initialState= {
	showStock: false
}

const yoloReducer = (state=initialState, action) => {
	switch(action.type) {
		case "GET_YOLO_STOCK": {
			return {...state, showStock: true}
			break;
		}
	}
	return state;
};

export default yoloReducer