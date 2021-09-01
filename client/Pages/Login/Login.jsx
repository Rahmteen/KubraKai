import React, { useState, useContext, useEffect, Fragment } from "react";
import { Row, Col, Container, Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_notext.png";

const Login = () => {
	return (
		<Container className="login-container ">
			<Form className="login-form">
				<div className="text-center">
					<Image width="80px" className="pb-4" src={logo}></Image>
				</div>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Remember me" />
				</Form.Group>
				<div className="text-center pt-3">
					<Button variant="warning" type="submit">
						Log In
					</Button>
				</div>
				<div className="mt-3 text-center">
					<small>
						Don't have an account? <a href="#">Sign Up</a>
					</small>
				</div>
			</Form>
		</Container>
	);
};

export default Login;
