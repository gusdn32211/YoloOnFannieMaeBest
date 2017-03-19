import { createSelector } from 'reselect'

export const yoloSelector = (state) => state.yolo.showStock
export const fetchStockDataSelector = (state) => state.fetchStockData.data
export const fetchYoloStockSelector = (state) => state.fetchYoloStock
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