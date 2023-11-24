import React from "react";
import { Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import wasikImage from '../assets/images/wasik.png';

const DetailCard = (props) => {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ width: '30rem' }}>
            <div className="row">
                <div className="col-mb-12">
                    <Card className="text-center">
                        <Card.Img variant="top" src={wasikImage} alt="Wasik" />
                        <Card.Body>
                            <Card.Title>Detail</Card.Title>
                            <Card.Text>
                                <h6>Id: { props.id }</h6>
                                <h6>Name: {props.name}</h6>
                                <h6>Department: {props.dept}</h6>
                                <h6>Age: {props.age}</h6>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default DetailCard;