import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";
import { stockSelector } from "../selectors";

class Stocks extends React.Component {
  render() {
    const stockData = _.map(this.props.stock, (stock) => {
    	return (
    		<tr key={stock.ticker}>
  				<td>{stock.ticker}</td>
  				<td>{stock.name}</td>
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
		stock: stockSelector(state)
	}
}

export default connect(mapStateToProps)(Stocks);