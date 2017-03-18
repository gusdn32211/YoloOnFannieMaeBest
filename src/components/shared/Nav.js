import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {

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
                <IndexLink to="\">Best Stocks</IndexLink>
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