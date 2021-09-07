import React, { useState, useContext, useEffect, Fragment } from "react";
import { Row, Col, Container, Form, Button, Image } from "react-bootstrap";
import { dataset_1 } from "../../data/dataset_1";
import BarChart from "../../Components/BarChart";

const Dashboard = () => {
	return (
		<Container className="pt-3 pb-3">
			<Row>
				<Col md={12}>Current IP:</Col>
				<Col md={12} className="barchar-col">
					<BarChart data={dataset_1} />
				</Col>
			</Row>
		</Container>
	);
};

export default Dashboard;
