import React from "react";

export default class TableCells extends React.Component {

	constructor(props) {
	   super(props);
	   this.setStockData = this.setStockData.bind(this);
	}

	setStockData(event) {
		this.props.setStockData(this.props.ticker)
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
		</tr>
    );
  }
}