import React from "react";
import { IndexLink, Link } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clearSelectedStock } from "../../actions/stockAction";

class Nav extends React.Component {

  render() {

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
            <ul className="nav navbar-nav">
              <li>
                <Link className="navbarHeader">Yolo On Fannie Mae</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <IndexLink to="/" onClick={this.props.clearSelectedStock}>Best Stocks</IndexLink>
              </li>
              <li>
                <Link to="yolo">Yolo</Link>
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
    clearSelectedStock: clearSelectedStock
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Nav);