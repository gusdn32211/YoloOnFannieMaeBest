const selectedStockReducer = (state="", action) => {
	switch(action.type) {
		case "SET_SELECTED_STOCK": {
			return action.payload
			break;
		}
		case "CLEAR_SELECTED_STOCK": {
			return ""
		}
	}
	return state;
};

export default selectedStockReducer