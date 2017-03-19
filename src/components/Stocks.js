import React from "react";
import stocks from "../data/stocks";

export default class Stocks extends React.Component {
  render() {
    const stockData = _.map(stocks, (stock) => {
      	return <div key={stock.ticker}>{stock.name}</div>
    })
    return (
    	<div>
        	<div>{stockData}</div> 	
	    	<table className="table table-striped">
			    <thead>
			      <tr>
			        <th>Ticker</th>
			        <th>Name</th>
			      </tr>
			    </thead>
			    <tbody>
		      <tr>
		        <td>John</td>
		        <td>Doe</td>
		      </tr>
		      <tr>
		        <td>Mary</td>
		        <td>Moe</td>
		      </tr>
		      <tr>
		        <td>July</td>
		        <td>Dooley</td>
		      </tr>
	    	  </tbody>
	    	</table>
    	</div>
    );
  }
}