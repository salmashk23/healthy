import React, { Component } from "react";
import { Button, Input, Form, Label, Col, Row } from 'reactstrap';
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
         if(!fields["body"]){
            formIsValid = false;
            errors["body"] = "Can't be empty";
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
     
    handleSubmit = async e => {
        e.preventDefault();
        let isValid = this.handleValidation();
        if (isValid) {
        // preparing user's data 
        let data = {
          "author": this.state.fields["author"],
          "body": this.state.fields["body"],
          "platform": this.state.fields["platform"]

        }
        // sending form data on button submition clicked 
        const response = await fetch('/istoryForm', {
          method: 'POST',
          body: JSON.stringify({data}),
          headers: {
            'Content-Type' : 'application/json'
          }
        });
        const body = await response.text();
        this.setState({ dataResponse: body });
        console.log("respond"+this.state.dataResponse);
          
        // clear form 
          // this.setState(this.setState({dataResponse: ''}));
        }
      };
 
     handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
     }
 
    render() {
        return (
            <Row className=" justify-content-center mt-5">
                <Col sm="6">
                    <Form 
                        method="POST" 
                        className="text-white p-5" 
                        id="content">
                        <h3 className="text-center h2">Create Post</h3>
                        {this.props.post.Post.map((item,i) => (
                            <div key={i} className="m-4">
                                <Label>{item.label}</Label>
                                <Input
                                    type={item.type}
                                    className={item.cName}
                                    placeholder={item.placeholder}
                                    id={item.name_id}
                                    name={item.value}
                                    onChange={this.handleChange.bind(this, item.value)} 
                                    value={this.state.fields[item.value]}>
                                    <option selected disabled>{item.name}</option>
                                    <option  value={item.value_1} >{item.name_1}</option>
                                    <option  value={item.value_2}>{item.name_2}</option>
                                </Input>
                                <div className="text-warning h5">{this.state.errors[item.value]}</div>
                            </div>
                            ))}
                    <Button
                        onClick={this.handleSubmit}  
                        type="submit" 
                        outline color="light" 
                        className="btn-lg btn-block mt-2 ">
                            Post
                    </Button>
                    <div className='form-inputs'><p className="text-danger text-center h4">{this.state.dataResponse}</p></div> 
                </Form>
            </Col>
        </Row>
        );
    }
}
