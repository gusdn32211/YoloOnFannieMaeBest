const initialState= {
	fetching: false,
	fetched: false,
	users: [],
	error: null,
}

const fetchDataReducer = (state=initialState, action) => {
	switch(action.type) {
		case "FETCH_DATA_PENDING": {
			return {...state, fetching: true}
			break;
		}
		case "FETCH_DATA_REJECTED": {
			return {...state, fetching: false, error: action.payload}
			break;
		}
		case "FETCH_DATA_FULFILLED": {
			return {...state,
				fetching: false,
				fetched: true,
				users: action.payload.data
			}
			break;
		}
	}
	return state;
};

export default fetchDataReducer