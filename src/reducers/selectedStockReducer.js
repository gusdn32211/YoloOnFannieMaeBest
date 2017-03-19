const selectedStockReducer = (state=null, action) => {
	switch(action.type) {
		case "SET_SELECTED_STOCK": {
			return action.payload
			break;
		}
		case "CLEAR_SELECTED_STOCK": {
			return false
		}
	}
	return state;
};

export default selectedStockReducer