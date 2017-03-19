import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";
import { filteredStockDataSelector, selectedStockSelector } from "../selectors";
import { setStockData, clearSelectedStock } from "../actions/stockAction";
import TableCells from "./shared/TableCells";


class Stocks extends React.Component {
	constructor(props) {
   super(props);
	}

	stockView() {
		if (!this.props.selectedStock) {
			return (
	    	<table className="table table-striped">
			    <thead>
			      <tr>
			        <th>Ticker</th>
			        <th>Name</th>
			      </tr>
			    </thead>
			    <tbody>
			    {this.stockData()}
	    	  </tbody>
	    	</table>
			)
		}
		else return (
			<div>
				<button type="button" className="btn btn-danger" onClick={this.props.clearSelectedStock}>Back</button>
				<h1>{this.props.selectedStock}</h1>
			</div>
		)
	}

	stockData() {
		return _.map(this.props.filteredStock, (stock) => {
    	return (
    		<TableCells
    			key={stock.ticker}
    			setStockData={this.props.setStockData}
    			ticker={stock.ticker}
    			name={stock.name} >
    		</TableCells>
  		)
    })
	}

  render() {
    return (
    	<div>
    		{this.stockView()}
    	</div>
    );
  }
}

function mapStateToProps(state) {
	return {
		filteredStock: filteredStockDataSelector(state),
		selectedStock: selectedStockSelector(state)
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		setStockData: setStockData,
		clearSelectedStock: clearSelectedStock
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Stocks);