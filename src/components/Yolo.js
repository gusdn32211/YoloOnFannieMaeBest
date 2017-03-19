import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {getYoloStock } from "../actions/yoloAction"
import { setStockData, clearSelectedStock } from "../actions/stockAction";
import { yoloSelector, filteredYoloStockDataSelector, fetchYoloStockStateSelector, selectedStockSelector, stockTickerSelector } from "../selectors";
import TableCellsWithScore from "./shared/TableCellsWithScore";


class Yolo extends React.Component {
  constructor(props) {
   super(props);
   this.onButtonClicked = this.onButtonClicked.bind(this);
   this.getView = this.getView.bind(this);
   this.stockData = this.stockData.bind(this);
  }

  onButtonClicked() {
  	this.props.getYoloStock();
  }

  stockData() {
	return _.map(this.props.filteredYoloStockDataSelector, (stock) => {
	return (
		<TableCellsWithScore
			key={stock.ticker}
			setStockData={this.props.setStockData}
			ticker={stock.ticker}
			name={stock.name}
			price={stock.price}
			analysis_score={stock.analysis_score} >
		</TableCellsWithScore>
		)
	})
  }
  getView() {
  	if (!this.props.yolo)
		return (<div className="wrapper">
					<button type="button" className="btn-lg btn-danger yoloButton" onClick= {this.onButtonClicked}>YOLO</button>
				</div>)
	else if (this.props.fetchYoloStockStateSelector)
		return (<div>
					<h1 className="loading">Please wait while we are predicting semantic analysis...</h1>
					<h1 className="loading">Check out our <a href="https://www.facebook.com/felist123/">Facebook Page</a></h1>
					<img src={`http://vignette1.wikia.nocookie.net/sanicsource/images/9/97/Doge.jpg/revision/latest?cb=20160112233015`}/>
				</div>)
	else if (this.props.selectedStock)
		return (
			<div>
				<button type="button" className="btn btn-danger" onClick={this.props.clearSelectedStock}>Back</button>
				<h1>{this.props.selectedStock}</h1>
				<img className="graph" src={`https://chart.finance.yahoo.com/z?s=${this.props.stockTicker}&t=6m&q=l&l=on&z=s&p=m50,e200,v&a=p12,p`}/>
			</div>)
	else
		return (
		    	<table className="table table-striped">
				    <thead>
				      <tr>
				        <th>Ticker</th>
				        <th>Name</th>
				        <th>Price</th>
				        <th>Analysis Score</th>
				      </tr>
				    </thead>
				    <tbody>
				    {this.stockData()}
		    	  </tbody>
		    	</table>
			)
	}

  render() {
    return (
    	<div>
    		{this.getView()}
    	</div>
    );
  }
}


function mapStateToProps(state) {
	return {
		selectedStock: selectedStockSelector(state),
		stockTicker: stockTickerSelector(state),
		yolo: yoloSelector(state),
		filteredYoloStockDataSelector: filteredYoloStockDataSelector(state),
		fetchYoloStockStateSelector: fetchYoloStockStateSelector(state)
	}
} 

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		getYoloStock: getYoloStock,
		setStockData: setStockData,
		clearSelectedStock: clearSelectedStock
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Yolo);