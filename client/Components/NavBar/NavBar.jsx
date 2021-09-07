import React, { useState, useContext, useEffect, Fragment } from "react";
import { withRouter } from "react-router";
import { Nav, Navbar, NavDropdown, Col, Image, Container, Button, Spinner, Collapse } from "react-bootstrap";
import logo from "../../assets/images/kk_logo.png";

const NavBar = () => {
	return (
		<Navbar variant="dark" bg="dark" expand="lg">
			<Container fluid>
				<Navbar.Brand className="" href="#home">
					KubraKai
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar-dark-example"/>
				<Navbar.Collapse id="navbar-dark-example">
					<Nav className="">
						<NavDropdown id="nav-dropdown-dark-example" title={<i className="fa-solid fa-sliders"></i>}>
							<NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Clusters</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
