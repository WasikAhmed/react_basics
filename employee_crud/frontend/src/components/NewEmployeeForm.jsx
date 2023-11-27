import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

const NewEmployeeForm = (props) => {

    const [formData, setFormData] = useState({
        pk: 0,
        name: "",
        email: "",
        document: "",
        phone: "",
    });

    useEffect(() => {
        if (props.employee) {
            const { pk, name, document, email, phone } = props.employee;
            setFormData({ pk, name, document, email, phone });
        }
    }, [props.employee]);

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const createEmployee = (e) => {
        e.preventDefault();
        axios.post(API_URL, formData).then(() => {
            props.resetState();
            props.toggle();
        });
    };

    const editEmployee = (e) => {
        e.preventDefault();
        axios.put(API_URL + formData.pk, formData).then(() => {
            props.resetState();
            props.toggle();
        });
    };

    const defaultIfEmpty = (value) => {
        return value == "" ? "" : value;
    }

    return (
        <Form onSubmit={props.employee ? editEmployee : createEmployee}>
            <FormGroup>
                <Label for="name">Name:</Label>
                <Input
                    type="text"
                    name="name"
                    onChange={onChange}
                    value={defaultIfEmpty(formData.name)} 
                />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email:</Label>
                <Input
                    type="email"
                    name="email"
                    onChange={onChange}
                    value={defaultIfEmpty(formData.email)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="document">Document:</Label>
                <Input
                    type="text"
                    name="document"
                    onChange={onChange}
                    value={defaultIfEmpty(formData.document)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="phone">Phone:</Label>
                <Input
                    type="text"
                    name="phone"
                    onChange={onChange}
                    value={defaultIfEmpty(formData.phone)}
                />
            </FormGroup>
            <Button>Send</Button>
        </Form>
    );
}

export default NewEmployeeForm;