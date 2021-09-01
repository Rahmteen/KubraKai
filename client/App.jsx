//Modules
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
//Components
import NavBar from "../client/Components/NavBar";
import Login from "../client/Pages/Login";
//Pages
import Home from "../client/Pages/Home";
//CSS
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	return (
		<Fragment>
			<Route exact path="/" component={NavBar} />
			<Switch>
				<Route exact path = '/login' component={Login} />
				<Route exact path="/" component={Home}></Route>
			</Switch>
		</Fragment>
	);
};

export default App;
