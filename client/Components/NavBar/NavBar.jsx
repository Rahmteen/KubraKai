import React, { useState, useContext, useEffect, Fragment } from "react";
import { Nav, Navbar, NavDropdown, Col, Image, Container, Button, Spinner, Collapse } from "react-bootstrap";

const NavBar = () => {
	return (
		<Nav className="main-nav" variant="tabs" defaultActiveKey="/home">
			<Nav.Item>
				<Nav.Link href="/home">Active</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="link-1">Option 2</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="disabled" disabled>
					Disabled
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

export default NavBar;
