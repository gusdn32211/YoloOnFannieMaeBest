import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";
import { filteredStockDataSelector } from "../selectors";
import { setStockData } from "../actions/stockAction";
import TableCells from "./shared/TableCells";


class Stocks extends React.Component {
	constructor(props) {
   super(props);
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
    	</div>
    );
  }
}

function mapStateToProps(state) {
	return {
		filteredStock: filteredStockDataSelector(state)
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		setStockData: setStockData
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Stocks);