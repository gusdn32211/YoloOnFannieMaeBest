import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";
import { filteredStockDataSelector } from "../selectors";
import { setStockData } from "../actions/stockAction";

class Stocks extends React.Component {
	constructor(props) {
   super(props);
   this.setStockData = this.setStockData.bind(this);
	}

	setStockData() {
		// event.preventDefault();
		this.props.setStockData("stockName")
	}

  render() {
    const stockData = _.map(this.props.filteredStock, (stock) => {
    	return (
    		<tr key={stock.ticker}>
  				<td>{stock.ticker}</td>
  				<td>
  					<div onClick={this.setStockData}>
	  					{stock.name}
  					</div>
  				</td>
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

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		setStockData: setStockData
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Stocks);