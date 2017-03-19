export function setStockTicker(ticker) {
	return {
		type: 'SET_SELECTED_STOCK_TICKER',
		payload: ticker
	}
}

export function setStockName(name) {
	return {
		type: 'SET_SELECTED_STOCK_NAME',
		payload: name
	}
}


export function clearSelectedStock() {
	return {
		type: 'CLEAR_SELECTED_STOCK',
	}
}