import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {getYoloStock} from "../actions/yoloAction"
import { yoloSelector, fetchYoloStockSelector } from "../selectors";

class Yolo extends React.Component {
  constructor(props) {
   super(props);
   this.onButtonClicked = this.onButtonClicked.bind(this);
   this.getView = this.getView.bind(this);
  }

  onButtonClicked() {
  	this.props.getYoloStock();
  	console.log("State: " + JSON.stringify(this.props.yolo));
  }

  getView() {
  	if (!this.props.yolo)
		return (<div className="wrapper">
					<button type="button" className="btn-lg btn-danger yoloButton" onClick= {this.onButtonClicked}>YOLO</button>
				</div>)
	else if (this.props.fetchYoloStock.fetching)
		return (<div>
					<h1 className="loading">Please wait while we are predicting semantic analysis...</h1>
					<h1 className="loading">Check out our <a href="https://www.facebook.com/felist123/">Facebook Page</a></h1>
				</div>)
	else
		return (<h1>YOLO ON {this.props.fetchYoloStock.data.name}</h1>)
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
		yolo: yoloSelector(state),
		fetchYoloStock: fetchYoloStockSelector(state)
	}
} 

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		getYoloStock: getYoloStock,
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Yolo);