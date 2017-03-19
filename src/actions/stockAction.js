export function setStockData(stockName) {
	return {
		type: 'SET_SELECTED_STOCK',
		payload: stockName
	}
}