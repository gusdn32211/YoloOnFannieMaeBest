export function setUserNameLogin(name) {
	return {
		type: 'SET_USER_NAME_LOGIN',
		payload: name
	}
}

export function setUserPasswordLogin(password) {
	return {
		type: 'SET_USER_PASSWORD_LOGIN',
		payload: password
	}
}