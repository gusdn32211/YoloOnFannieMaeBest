import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";
import { filteredStockDataSelector, stockTickerSelector, selectedStockDataSelector } from "../selectors";
import { setStockData, clearSelectedStock } from "../actions/stockAction";
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
				<h1>{this.props.stockTicker}</h1>
				<table className="table table-striped">
				    <thead>
				      <tr>
				        <th>Ticker</th>
				        <th>Name</th>
				        <th>Current Price</th>
				        <th>Close Price</th>
				        <th>Word Count Analysis</th>
				      </tr>
				    </thead>
				    <tbody>
							<tr>
								<td>{this.props.selectedStockData.ticker}</td>
								<td>{this.props.selectedStockData.name}</td>
								<td>{this.props.selectedStockData.price}</td>
								<td>{this.props.selectedStockData.close}</td>
								<td>{this.props.selectedStockData.count}</td>
							</tr>
						</tbody>
		    	</table>
	  			<img className="graph" src={`https://chart.finance.yahoo.com/z?s=${this.props.stockTicker}&t=6m&q=l&l=on&z=s&p=m50,e200,v&a=p12,p`}/>
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
    		<h3>This app takes data from /r/wallstreetbets and performs sentiment analysis on it to recommend stocks that you should yolo on.</h3>
        <h5>Trending stocks on /r/wallstreetbets</h5>
    		{this.stockView()}
    	</div>
    );
  }
}

function mapStateToProps(state) {
	return {
		filteredStock: filteredStockDataSelector(state),
		stockTicker: stockTickerSelector(state),
		selectedStockData: selectedStockDataSelector(state)
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		setStockData: setStockData,
		clearSelectedStock: clearSelectedStock
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Stocks);
