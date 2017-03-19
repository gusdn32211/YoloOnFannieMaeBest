import { createSelector } from 'reselect'

export const fetchStockDataSelector = (state) => state.fetchStockData.data

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
		    "ticker": "$FNMA"
		}]
	}
)