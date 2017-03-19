const selectedStockReducer = (state=null, action) => {
	switch(action.type) {
		case "SET_SELECTED_STOCK": {
			return {...state, state: action.payload}
			break;
		}
	}
	return state;
};

export default selectedStockReducer