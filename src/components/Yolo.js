import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getYoloStock } from "../actions/yoloAction"
import { setSelectedYolo, clearSelectedYoloStock } from "../actions/yoloAction";
import { 
	filteredYoloStockDataSelector,
	yoloStockTickerSelector,
	yoloStockStateSelector,
	selectedYoloStockSelector
} from "../selectors";
import TableCells from "./shared/TableCells";


class Yolo extends React.Component {
  constructor(props) {
   super(props);
   this.yoloButton = this.yoloButton.bind(this)
  }

  yoloButton() {
  	this.props.getYoloStock()
  }

  stockData() {
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
					<img className="graph" src={`https://chart.finance.yahoo.com/z?s=${this.props.yoloStockTicker}&t=6m&q=l&l=on&z=s&p=m50,e200,v&a=p12,p`}/>
				</div>
			)
		if (this.props.yoloStockState.fetched) 
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
		if (this.props.yoloStockState.fetching)
			return (
				<div>
					<h1 className="loading">Please wait while we are predicting semantic analysis...</h1>
					<h1 className="loading">Check out our <a href="https://www.facebook.com/felist123/">Facebook Page</a></h1>
					<img src="http://vignette1.wikia.nocookie.net/sanicsource/images/9/97/Doge.jpg/revision/latest?cb=20160112233015"/>
				</div>
			)
			else return (
				<div className="wrapper">
					<button type="button" className="btn-lg btn-danger yoloButton" onClick={this.yoloButton}>Yolo Buy</button>
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
		yoloStockTicker: yoloStockTickerSelector(state)
	}
} 

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		getYoloStock: getYoloStock,
		setSelectedYolo: setSelectedYolo,
		clearSelectedYoloStock: clearSelectedYoloStock
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Yolo);