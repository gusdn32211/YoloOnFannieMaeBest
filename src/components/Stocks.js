import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";
import { filteredStockDataSelector, stockTickerSelector, selectedStockNameSelector } from "../selectors";
import { setStockTicker, setStockName, clearSelectedStock } from "../actions/stockAction";
import TableCells from "./shared/TableCells";


class Stocks extends React.Component {
	constructor(props) {
   super(props);
	}

	stockView() {
		if (!this.props.stockTicker) {
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
  			<img className="graph" src={`https://chart.finance.yahoo.com/z?s=${this.props.stockTicker}&t=6m&q=l&l=on&z=s&p=m50,e200,v&a=p12,p`}/>
			</div>
		)
	}
	stockData() {
		return _.map(this.props.filteredStock, (stock) => {
    	return (
    		<TableCells
    			key={stock.ticker}
    			setStockTicker={this.props.setStockTicker}
    			setStockName={this.props.setStockName}
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
		stockTicker: stockTickerSelector(state),
		stockName: selectedStockNameSelector(state)
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		setStockTicker: setStockTicker,
		clearSelectedStock: clearSelectedStock,
		setStockName: setStockName
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Stocks);
