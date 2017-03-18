import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Home extends React.Component {
  render() {
    return (
    	<div>
	      <h1>Home</h1>
        <div></div>
	    </div>
    );
  }
}

function mapStateToProps(state) {
	return {
	}
}

export default connect(mapStateToProps)(Home);