import { createSelector } from 'reselect'

export const fetchStockDataSelector = (state) => state.fetchStockData.data
export const selectedStockSelector = (state) => state.selectedStock

export const yoloStockStateSelector = (state) => state.fetchYoloStock
export const fetchYoloStockDataSelector = (state) => state.fetchYoloStock.data
export const fetchingYoloStockStateSelector = (state) => state.fetchYoloStock.fetching
export const fetchedYoloStockStateSelector = (state) => state.fetchYoloStock.fetched
export const selectedYoloStockSelector = (state) => state.selectedYoloStock
export const sortedYoloStockTableColumnSelector = (state) => state.fetchYoloStock.sorted

export const filteredStockDataSelector = createSelector(
	fetchStockDataSelector,
	(data) => {
		if (data) {
			let sortedData = _.sortBy(data, ['count']).reverse();
			let filteredData = sortedData.slice(0, 10);
			return filteredData
		}
		else return [{
		    "count": 0,
		    "ticker": "$FNMA",
		    "name": "Federal National Mortgage Assctn Fnni Me"
		}]
	}
)

export const filteredYoloStockDataSelector = createSelector(
	fetchYoloStockDataSelector,
	sortedYoloStockTableColumnSelector,
	(data, columnHeader) => {
		if (data) {
			let sortedData = _.sortBy(data, [columnHeader]).reverse();
			return sortedData
		}
		else return [{
		    "count": 0,
		    "ticker": "$FNMA",
		    "name": "Federal National Mortgage Assctn Fnni Me",
		    "price": "0.00",
		    "analysis_score": "99999999"
		}]
	}
)

export const stockTickerSelector = createSelector(
	selectedStockSelector,
	(ticker) => {
		if (ticker) {
			const length = ticker.length;
			ticker = ticker.toString().slice(1, length);
			return ticker;
		}
		else return ""
	}
)

export const yoloStockTickerSelector = createSelector(
	selectedYoloStockSelector,
	(ticker) => {
		if (ticker) {
			const length = ticker.length;
			ticker = ticker.toString().slice(1, length);
			return ticker;
		}
		else return ""
	}
)

export const selectedYoloStockDataSelector = createSelector(
	fetchYoloStockDataSelector,
	selectedYoloStockSelector,
	(data, stockTicker) => {
		if (data) {
			let selectedData = _.find(data, { 'ticker': stockTicker });
			return selectedData;
		}
		else return {}
	}
)

export const selectedStockDataSelector = createSelector(
	fetchStockDataSelector,
	selectedStockSelector,
	(data, stockTicker) => {
		if (data) {
			let selectedData = _.find(data, { 'ticker': stockTicker });
			return selectedData;
		}
		else return {}
	}
)
