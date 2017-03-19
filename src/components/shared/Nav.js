import React from "react";
import { IndexLink, Link } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clearSelectedStock } from "../../actions/stockAction";
import { clearYoloData } from "../../actions/yoloAction";

class Nav extends React.Component {

  render() {

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
            <ul className="nav navbar-nav">
              <li>
              <img className="logo" src="http://i.imgur.com/JsXfGqe.png"/>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <IndexLink to="/" onClick={this.props.clearSelectedStock}>Best Stocks</IndexLink>
              </li>
              <li>
                <Link to="yolo" onClick={this.props.clearYoloData}>Yolo</Link>
              </li>
            </ul>
          </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    clearSelectedStock: clearSelectedStock,
    clearYoloData: clearYoloData
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Nav);