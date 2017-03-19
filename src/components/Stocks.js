import React from "react";
import stocks from "../data/stocks";

export default class Stocks extends React.Component {
  render() {
    const stockData = _.map(stocks, (stock) => {
      	return (<tr key = {stock.ticker}>
      				<td>{stock.ticker}</td>
      				<td>{stock.name}</td>
      			</tr>)
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