const initialState= {
	ticker: "",
	name: "",
}

const selectedStockReducer = (state=initialState, action) => {
	switch(action.type) {
		case "SET_SELECTED_STOCK_TICKER": {
			return {...state, ticker: action.payload}
			break;
		}
		case "SET_SELECTED_STOCK_NAME": {
			return {...state, name: action.payload}
			break;
		}
		case "CLEAR_SELECTED_STOCK": {
			return {...state, ticker: ""}
		}
	}
	return state;
};

export default selectedStockReducer