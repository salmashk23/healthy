import React from "react";
import { Button, Input, FormGroup , Col, Row, Form, Label } from 'reactstrap';
import './content_contact.css';


class ContentContact extends React.Component{
  render(){
      return (
        <Row className=" justify-content-center">
            <Col sm="6">
                <Form validated id="contact-form" className="m-5 p-5 text-white">
                    <h3 className="text-center mb-4 display-3"> GET IN TOUCH </h3>
                    <h3 class=" text-center mb-5 " >We would love to hear from you !</h3>
                    {this.props.content.map((item,i) => {
                        return(
                            <FormGroup key={i} className="mb-4 mt-4  " >
                                <Label>{item.label}</Label>
                                <Input
                                    type={item.type}
                                    placeholder={item.placeholder}
                                    id={item.name_id}
                                    required={item.required}
                                    />
                            </FormGroup>
                                )
                             }
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
}

export default ContentContact;
