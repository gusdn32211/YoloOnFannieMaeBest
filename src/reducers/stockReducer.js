const initialState= {
	data: {}
}

const stockReducer = (state=initialState, action) => {
	switch(action.type) {
		case "SET_STOCK_DATA": {
			return {...state, data: action.payload}
			break;
		}
	}
	return state;
};

export default stockReducer