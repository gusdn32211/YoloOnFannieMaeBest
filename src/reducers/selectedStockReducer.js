const selectedStockReducer = (state=null, action) => {
	switch(action.type) {
		case "SET_SELECTED_STOCK": {
			return action.payload
			break;
		}
	}
	return state;
};

export default selectedStockReducer