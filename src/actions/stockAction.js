export function setStockData(stockName) {
	return {
		type: 'SET_SELECTED_STOCK',
		payload: stockName
	}
}

export function clearSelectedStock() {
	return {
		type: 'CLEAR_SELECTED_STOCK',
	}
}