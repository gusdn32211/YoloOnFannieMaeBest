import React from "react";

export default class TableHeaders extends React.Component {

	constructor(props) {
	   super(props);
	   this.sortDataByName = this.sortDataByName.bind(this);
 	   this.sortDataByTicker = this.sortDataByTicker.bind(this);
 	   this.sortDataByPrice = this.sortDataByPrice.bind(this);
 	   this.sortDataByAnalysisScore = this.sortDataByAnalysisScore.bind(this);
	}

	sortDataByName(){
		this.props.sortData("name")
	}

	sortDataByTicker(){
		this.props.sortData("ticker")
	}

	sortDataByPrice(){
		this.props.sortData("price")
	}

	sortDataByAnalysisScore(){
		this.props.sortData("analysis_score")
	}	

	tableScoreAnalysis() {
		if (!!this.props.analysis_score){
			return (
	        <th onClick={this.sortDataByAnalysisScore}>Analysis Score</th>
			)
		}
	}

	tablePrice() {
		if (!!this.props.price){
			return (
	        <th onClick={this.sortDataByPrice}>Prices</th>
			)
		}
	}

  render() {
    return (
	    <thead>
	      <tr>
	        <th onClick={this.sortDataByTicker}>Ticker</th>
	        <th onClick={this.sortDataByName}>Name</th>
	        {this.tablePrice()}
	        {this.tableScoreAnalysis()}
	      </tr>
	    </thead>
    );
  }
}