import React from "react";
import ReactDOM from 'react-dom';
import { Container, Button, Input, FormGroup , Col, Row, Form, Label } from 'reactstrap';
import ContactItems from "./contact_items.js"
import './content_contact.css';


const ContentContact = () => {
return (
        <Row className=" justify-content-center">
            <Col sm="6">
              <Form validated id="contact-form" className="m-5 p-5 text-white">
                        <h3 className="text-center mb-4 display-3"> GET IN TOUCH </h3>
                        <h3 class=" text-center mb-5 " >We would love to hear from you !</h3>
                            {ContactItems.map((item => {
                                    return(
                                            <FormGroup className="mb-4 mt-4  " >
                                                <Label>{item.label}</Label>
                                                <Input
                                                    type={item.type}
                                                    rows={item.rows}
                                                    placeholder={item.placeholder}
                                                    required={item.required}
                                                />
                                            </FormGroup>
                                            )
                                        }
                                    )
                                )
                            }
                        <div className="text-center mt-5 " id="send">
                              <Button outline color="light">
                                  Send
                              </Button>
                        </div>
                    </Form>
                </Col>
        </Row>
    );
}

export default ContentContact;
