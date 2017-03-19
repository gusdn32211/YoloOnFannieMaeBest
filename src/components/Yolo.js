import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
	setSelectedYolo,
	clearSelectedYoloStock,
	sortYoloData,
	getYoloShortStock,
	getYoloStock
} from "../actions/yoloAction";
import {
	filteredYoloStockDataSelector,
	yoloStockTickerSelector,
	yoloStockStateSelector,
	selectedYoloStockSelector,
	selectedYoloStockDataSelector
} from "../selectors";
import TableCells from "./shared/TableCells";
import TableHeaders from "./shared/TableHeaders";

class Yolo extends React.Component {
  constructor(props) {
   super(props);
   this.yoloButton = this.yoloButton.bind(this);
   this.yoloShortButton = this.yoloShortButton.bind(this);
   this.sortByTableHeader = this.sortByTableHeader.bind(this);
  }

  yoloButton() {
  	this.props.getYoloStock()
  }

  yoloShortButton() {
  	this.props.getYoloShortStock()
  }

  sortByTableHeader(header) {
  	this.props.sortYoloData(header);
  }

  stockDataTable() {
	return _.map(this.props.filteredYoloStockData, (stock) => {
		return (
			<TableCells
				key={stock.ticker}
				setStockData={this.props.setSelectedYolo}
				ticker={stock.ticker}
				name={stock.name}
				price={stock.price}
				analysis_score={stock.analysis_score} >
			</TableCells>
		)
	})
  }
  getView() {
		if (this.props.selectedYoloStock)
			return (
				<div>
					<button type="button" className="btn btn-danger" onClick={this.props.clearSelectedYoloStock}>Back</button>
					<h1>{this.props.yoloStockTicker}</h1>
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
							<tr>
								<td>{this.props.selectedYoloStockData.ticker}</td>
								<td>{this.props.selectedYoloStockData.name}</td>
								<td>{this.props.selectedYoloStockData.price}</td>
								<td>{this.props.selectedYoloStockData.analysis_score}</td>
							</tr>
						</tbody>
		    	</table>
					<img className="graph" src={`https://chart.finance.yahoo.com/z?s=${this.props.yoloStockTicker}&t=6m&q=l&l=on&z=s&p=m50,e200,v&a=p12,p`}/>
				</div>
			)
		if (this.props.yoloStockState.fetched)
			return (
	    	<table className="table table-striped">
			    <TableHeaders
			    	sortData={this.props.sortYoloData}
			    	price={true}
			    	analysis_score={true}>
		    	</TableHeaders>
			    <tbody>
			    {this.stockDataTable()}
	    	  </tbody>
	    	</table>
			)
		if (this.props.yoloStockState.fetching)
			return (
				<div>
					<h1 className="loading">Please wait while we are doing sentiment analysis...</h1>
					<h1 className="loading">Check out our <a  target="_blank" href="https://www.facebook.com/YoloOnFNMA-211269462684651/">Facebook Page</a></h1>
					<img className="doge" src="http://vignette1.wikia.nocookie.net/sanicsource/images/9/97/Doge.jpg/revision/latest?cb=20160112233015"/>
				</div>
			)
			else return (
				<div className="wrapper">
					<button type="button" className="btn-lg btn-danger yoloBuyButton" onClick={this.yoloButton}>Yolo Buy</button>
					<button type="button" className="btn-lg btn-danger yoloShortButton" onClick={this.yoloShortButton}>Yolo Short</button>
				</div>
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
		filteredYoloStockData: filteredYoloStockDataSelector(state),
		yoloStockState: yoloStockStateSelector(state),
		selectedYoloStock: selectedYoloStockSelector(state),
		yoloStockTicker: yoloStockTickerSelector(state),
		selectedYoloStockData: selectedYoloStockDataSelector(state)
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		getYoloStock: getYoloStock,
		setSelectedYolo: setSelectedYolo,
		clearSelectedYoloStock: clearSelectedYoloStock,
		sortYoloData: sortYoloData,
		getYoloShortStock: getYoloShortStock
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Yolo);
