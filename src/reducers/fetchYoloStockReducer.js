const initialState= {
	fetching: false,
	fetched: false,
	data: [],
	error: null,
}

const fetchYoloStockReducer = (state=initialState, action) => {
	switch(action.type) {
		case "FETCH_YOLO_STOCK_PENDING": {
			return {...state, fetching: true}
			break;
		}
		case "FETCH_YOLO_STOCK_REJECTED": {
			return {...state, fetching: false, error: action.payload}
			break;
		}
		case "FETCH_YOLO_STOCK_FULFILLED": {
			return {...state,
				fetching: false,
				fetched: true,
				data: action.payload.data
			}
			break;
		}
	}
	return state;
};

export default fetchYoloStockReducer