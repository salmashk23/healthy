import React, { Component } from "react";
import { Button, Input, FormGroup , Form, Label, Col, Row } from 'reactstrap';
// import PostItems from "./post_items.js";
import "./post.css";

export default class Post extends Component {
    constructor(props) {
    super(props);
  }

    render() {
        return (
            <Row className=" justify-content-center mt-5">
                <Col sm="6">
                    <Form className="text-white p-5 " id="content">

                        <h3 className="text-center h2">Create Post</h3>

                            {this.props.post.Post.map((item => {
                                return(
                                    <div className="m-4">

                                           <Label>{item.label}</Label>
                                           <Input
                                            type={item.type}
                                            className={item.cName}
                                            rows={item.rows}
                                            placeholder={item.placeholder}
                                            id={item.id} required>
                                               <option selected disabled>{item.name}</option>
                                               <option  value={item.value_1} >{item.name_1}</option>
                                               <option  value={item.value_2}>{item.name_2}</option>
                                            </Input>
                                        </div>
                                               )
                                           }
                                       )
                                   )
                               }

                        <Button type="submit" outline color="light" className="btn-lg btn-block mt-3 ">Post</Button>
                    </Form>

                </Col>
            </Row>


        );
    }
}
