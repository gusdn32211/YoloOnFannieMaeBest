import React from 'react'
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { render } from 'react-dom';
import Personal from "./components/Personal";
import Home from "./components/Home";
import App from "./components/App";
import Settings from "./components/Settings";

import store from "./store"

const app = document.getElementById('app');

ReactDOM.render(
	<Provider store={store}>
	  <Router history={browserHistory}>
	    <Route path="/" component={App}>
	      <IndexRoute component={Home}></IndexRoute>
		  <Route path="personal" name="personal" component={Personal}></Route>
	      <Route path="settings" name="settings" component={Settings}></Route>
	    </Route>
	  </Router>
  </Provider>,
app);