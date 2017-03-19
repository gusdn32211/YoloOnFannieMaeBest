import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {getYoloStock} from "../actions/yoloAction"
import { yoloSelector, stockSelector } from "../selectors";

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
		return (<button type="button" className="btn btn-danger" onClick= {this.onButtonClicked}>YOLO</button>)
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
		yolo: yoloSelector(state)
	}
} 

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		getYoloStock: getYoloStock,
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Yolo);