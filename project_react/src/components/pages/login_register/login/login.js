import React, { Component } from "react";
import { Container, Button, Input, FormGroup , Form, Label, Col, Row } from 'reactstrap';
import LoginItems from "./login_items.js";
import  "../login_register.css";

export default class Login extends Component {
    render() {
        return (
            <Row className=" justify-content-center m-5">
                <Col sm="6">
                    <Form className="text-white p-5" id="logreg-content">
                        <h3 className="text-center h2">LOG IN</h3>
                        <p className="text-center h4 mb-5">Welcome Back, Please Login To Your Account</p>
                         {LoginItems.map((item => {
                             return(
                            <FormGroup  check={item.check}>
                                <Label id={item.id} check={item.check} >{item.label}</Label>
                                <Input type={item.type} className={item.cName} placeholder={item.placeholder} required/>
                                 &nbsp; &nbsp; &nbsp; {item.name}
                            </FormGroup>
                                            )
                                        }
                                    )
                                )
                            }

                        <Button type="submit" outline color="light" className="btn-lg btn-block mt-4 mb-4">Sign In</Button>
                        <p className="forgot-password text-center">
                            Forgot Your <a href="#">Password?</a>
                        </p>
                    </Form>
                    <p className="sign text-center text-white p-3 h3">
                        Don't have an account? <a href='/register_page' >Sign Up</a>
                    </p>
                </Col>
            </Row>
        );
    }
}
