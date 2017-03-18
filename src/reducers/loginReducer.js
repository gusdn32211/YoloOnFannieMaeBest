const initialState= {
	username: "",
	password: ""
}

const loginReducer = (state=initialState, action) => {
	switch(action.type) {
		case "SET_USER_NAME_LOGIN": {
			return {...state, username: action.payload}
			break;
		}
		case "SET_USER_PASSWORD_LOGIN": {
			return {...state, password: action.payload}
			break;
		}
	}
	return state;
};

export default loginReducer