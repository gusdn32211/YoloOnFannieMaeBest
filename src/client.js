import React from 'react'
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { render } from 'react-dom';
import Yolo from "./components/Yolo";
import Stocks from "./components/Stocks";
import App from "./components/App";

import store from "./store"

const app = document.getElementById('app');

ReactDOM.render(
	<Provider store={store}>
	  <Router history={browserHistory}>
	    <Route path="/" component={App}>
	      <IndexRoute component={Stocks}></IndexRoute>
	      <Route path="yolo" name="yolo" component={Yolo}></Route>
	    </Route>
	  </Router>
  </Provider>,
app);