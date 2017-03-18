import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import stocks from "../data/stocks";
import _ from "lodash";

class Home extends React.Component {
  render() {
    const stockData = _.map(stocks, (stock) => {
      return _.map(stock, () => {
          console.log(stock.name, stock.ticker)
          // <div key={stock.ticker}>{stock.name}</div>
        }
      );
    })
    // _.map(stocks, (val, key) =>
    //   <div key={val}>{key}</div>
    // );
    return (
    	<div>
	      <h1>Home</h1>
        <div>{stockData}</div>
	    </div>
    );
  }
}

function mapStateToProps(state) {
	return {
	}
}

export default connect(mapStateToProps)(Home);