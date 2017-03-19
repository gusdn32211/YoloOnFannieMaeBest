import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";
import { filteredStockDataSelector } from "../selectors";

class Stocks extends React.Component {
  render() {
    const stockData = _.map(this.props.filteredStock, (stock) => {
    	return (
    		<tr key={stock.ticker}>
  				<td>{stock.count}</td>
  				<td>{stock.ticker}</td>
  			</tr>
  		)
    })
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
			    {stockData}
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

export default connect(mapStateToProps)(Stocks);