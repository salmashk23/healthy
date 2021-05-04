import React, { Component } from "react";
import { Button, Input, FormGroup , Form, Label, Col, Row } from 'reactstrap';
import QuestOption from "./option_register/quest_option/quest_option.js";
import BodyOption from "./option_register/body_option/body_option.js";
import RegisterItems from "./register_items.js";
import  "../login_register.css";

 export default class Register extends Component {
     constructor(props) {
     super(props);
    }
    render() {
        return (
            <Row className=" justify-content-center mt-5">
                <Col sm="6">
                    <Form className="text-white p-5 " id="logreg-content">

                        <h3 className="text-center h2">Register</h3>
                        <p className="text-center h4 mb-5">Lets Get You On Board</p>
                        <Row>
                            {this.props.content.map((item => {
                                return(
                                    <Col md="6"  className="mb-4">
                                           <Label>{item.label}</Label>
                                           <Input type={item.type} className={item.cName} placeholder={item.placeholder} id={item.id} required>
                                               <option selected disabled>{item.name}</option>
                                               <option  value={item.value_1} >{item.name_1}</option>
                                               <option  value={item.value_2}>{item.name_2}</option>
                                            </Input>
                                    </Col >

                                               )
                                           }
                                       )
                                   )
                               }
                        </Row>
                        <BodyOption/>
                        <QuestOption/>

                        <Button type="submit" outline color="light" className="btn-lg btn-block mt-5 ">Sign Up</Button>
                    </Form>
                    <p className="sign text-center text-white p-3 h3">
                          Already have an account? <a href="/login_page">Sign In</a>
                    </p>
                </Col>
            </Row>
        );
    }
}
