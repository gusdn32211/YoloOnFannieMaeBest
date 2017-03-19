import React from "react";

export default class TableCells extends React.Component {

	constructor(props) {
	   super(props);
	   this.setStockTicker = this.setStockTicker.bind(this);
	}

	setStockTicker(event) {
		this.props.setStockTicker(this.props.ticker)
		this.props.setStockName(this.props.name)
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
				<a onClick={this.setStockTicker}>
					{this.props.name}
				</a>
			</td>
			<td>{this.props.price}</td>
			{this.tableScoreAnalysis()}
		</tr>
    );
  }
}