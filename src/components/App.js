import React from "react";
import { Link } from "react-router";

import Footer from "./shared/Footer";
import Nav from "./shared/Nav";

export default class App extends React.Component {

  render() {
    return (
      <div>

        <Nav/>

        <div className="container navMargin">
          <div className="row">
            <div className="col-lg-12">
              {this.props.children}
            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}
