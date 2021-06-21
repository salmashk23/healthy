import React, { Component } from "react";
import { Button, Input, Form, Label, Col, Row } from 'reactstrap';
import CommentBox from './discussion.js';
import Axios from 'axios';
// import PostItems from "./post_items.js";
import "./post.css";

export default class Post extends Component {
    constructor(props){
        super(props);
   
        this.state = {
            fields: {},
            errors: {}
        }
     }
 
     handleValidation(){
         let fields = this.state.fields;
         let errors = {};
         let formIsValid = true;
 
         //Post
         if(!fields["post"]){
            formIsValid = false;
            errors["post"] = "Can't be empty";
         }
         //File
         if (typeof fields["file"] !== "undefined") {
            var pattern = new RegExp(/^.*\.(jpg|JPG|png|PNG|pdf|PDF|doc|DOC)$/);
            if (!pattern.test(fields["file"])) {
                formIsValid = false;
            errors["file"] = "File does not support. You must use .png  .jpg  .pdf or .doc";
            }
         }

        this.setState({errors: errors});
        return formIsValid;
    }
     
    // postSubmit(e){
    //      e.preventDefault();
 
    //      if(this.handleValidation()){
    //         alert("Your Post Was Updated");
            
    //      }
    //  }
 
     handleChange(field, e){
        e.preventDefault();         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
     }
 
    render() {
        return (
            <Row className=" justify-content-center mt-5">
                <Col sm="6">
                    <Form action="/page/istory" method="GET" className="text-white p-5" id="content">
                        <h3 className="text-center h2">Create Post</h3>
                        {this.props.post.Post.map((item => {
                            return(
                                <div className="m-4">
                                    <Label>{item.label}</Label>
                                    <Input
                                        type={item.type}
                                        className={item.cName}
                                        placeholder={item.placeholder}
                                        id={item.name_id}
                                        onChange={this.handleChange.bind(this, item.value)} 
                                        value={this.state.fields[item.value]}
                                        >
                                        <option selected disabled>{item.name}</option>
                                        <option  value={item.value_1} >{item.name_1}</option>
                                        <option  value={item.value_2}>{item.name_2}</option>
                                    </Input>
                                    <div className="text-warning h5">{this.state.errors[item.value]}</div>
                                </div>
                            )
                        }
                    )
                 )
             }
                    <Button type="submit" outline color="light" className="btn-lg btn-block mt-2 ">Post</Button>
                </Form>
            </Col>
        </Row>
        );
    }
}
