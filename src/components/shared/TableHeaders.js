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
	        <th className="floatLeft" onClick={this.sortDataByAnalysisScore}>
		        <div className="glyphicon glyphicon-sort-by-attributes-alt sortIcon" aria-hidden="true"></div>
						Analysis Score
	        </th>
			)
		}
	}

	tablePrice() {
		if (!!this.props.price){
			return (
	        <th className="floatLeft" onClick={this.sortDataByPrice}>
		        <div className="glyphicon glyphicon-sort-by-attributes-alt sortIcon" aria-hidden="true"></div>
						Prices
	        </th>
			)
		}
	}

  render() {
    return (
	    <thead>
	      <tr>
	        <th className="floatLeft" onClick={this.sortDataByTicker}>
		        <div className="glyphicon glyphicon-sort-by-attributes-alt sortIcon" aria-hidden="true"></div>
						Ticker
					</th>
	        <th className="floatLeft" onClick={this.sortDataByName}>
		        <div className="glyphicon glyphicon-sort-by-attributes-alt sortIcon" aria-hidden="true"></div>
						Name
	        </th>
	        {this.tablePrice()}
	        {this.tableScoreAnalysis()}
	      </tr>
	    </thead>
    );
  }
}