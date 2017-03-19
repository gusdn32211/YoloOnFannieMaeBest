const initialState= {
	fetching: false,
	fetched: false,
	data: [],
	error: null,
}

const fetchStockDataReducer = (state=initialState, action) => {
	switch(action.type) {
		case "FETCH_STOCK_DATA_PENDING": {
			return {...state, fetching: true}
			break;
		}
		case "FETCH_STOCK_DATA_REJECTED": {
			return {...state, fetching: false, error: action.payload}
			break;
		}
		case "FETCH_STOCK_DATA_FULFILLED": {
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

export default fetchStockDataReducer