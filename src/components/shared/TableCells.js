import React from "react";

export default class TableCells extends React.Component {

	constructor(props) {
	   super(props);
	   this.setStockData = this.setStockData.bind(this);
	}

	setStockData(event) {
		this.props.setStockData(this.props.ticker)
	}

	tableScoreAnalysis() {
		if (this.props.analysis_score){
			return (
				<td>{this.props.analysis_score}</td>
			)
		}
	}

  render() {
    return (
		<tr>
			<td>{this.props.ticker}</td>
			<td>
				<a onClick={this.setStockData}>
					{this.props.name}
				</a>
			</td>
			<td>{this.props.price}</td>
			{this.tableScoreAnalysis()}
		</tr>
    );
  }
}