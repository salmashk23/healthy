import React, { Component } from "react";
import { Button, Input,Form,FormGroup, Label, Col, Row } from 'reactstrap';
import QuestOption from "./quest_option/quest_option.js";
import  "../login_register.css";

 export default class Register extends Component {
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
 
        //Name Validation
        if(!fields["name"]){
            formIsValid = false;
            errors["name"] = "Can't be empty";
        }
        if(typeof fields["name"] !== "undefined"){
            if(!fields["name"].match(/^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/)){
               formIsValid = false;
               errors["name"] = "Only letters";
            }        
        }

        //Email Validation
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Please enter your email Address.";
        }
        if (typeof fields["email"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
                formIsValid = false;
            errors["email"] = "Please enter valid email address.";
            }
        }
        //Age Validation
        if(!fields["age"]){
            formIsValid = false;
            errors["age"] = "Can't be empty";
        }
        if(typeof fields["age"] !== "undefined"){
            if(!fields["age"].match(/^(1[89]|[2-9][0-9]|100)$/)){
               formIsValid = false;
               errors["age"] = "To successfully open an account you must be 18-100 years old";
            }        
        }

        //Password Validation
        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "Please enter your password.";
        }
        if (!fields["confirm_password"]) {
            formIsValid = false;
            errors["confirm_password"] = "Please enter your confirm password.";
        }
        if (typeof fields["password"] !== "undefined" && typeof fields["confirm_password"] !== "undefined") {
             if (fields["password"] != fields["confirm_password"]) {
                formIsValid = false;
                errors["confirm_password"] = "Passwords don't match.";
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
          "name": this.state.fields["name"],
          "email": this.state.fields["email"],
          "gender": this.state.fields["gender"],
          "age": this.state.fields["age"],
          "height": this.state.fields["height"],
          "weight": this.state.fields["weight"],
          "password": this.state.fields["password"]
        }
        // sending form data on button submition clicked 
        const response = await fetch('/register_page', {
          method: 'POST',
          body: JSON.stringify({data}),
          headers: {
            'Content-Type' : 'application/json'
          }
        });
        const body = await response.text();
        this.setState({ dataResponse: body });
        console.log("respond"+this.state.dataResponse);
          
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
                        id="logreg-content"  >
                        <h3 className="text-center h2">Register</h3>
                        <p className="text-center h4 mb-5">Lets Get You On Board</p>
                        <Row>
                            {this.props.content.Register.map((item,i) => (
                                <Col md="6"  key={i} className="mb-4">
                                    <Label>{item.label}</Label>
                                    <Input
                                        type={item.type}
                                        className={item.cName}
                                        placeholder={item.placeholder}
                                        id={item.name_id}
                                        name={item.value}
                                        onChange={this.handleChange.bind(this, item.value)} 
                                        value={this.state.fields[item.value]}
                                        >     
                                        <option selected disabled>{item.name}</option>
                                        <option  value={item.value_1} >{item.name_1}</option>
                                        <option  value={item.value_2}> {item.name_2}</option>
                                    </Input>
                                    <div className="text-warning">{this.state.errors[item.value]}</div>
                                </Col>
                            ))}
                        </Row>
                        <QuestOption quest={this.props.content}/>
                        <Button 
                            onClick={this.handleSubmit} 
                            type="submit" o
                            outline color="light" 
                            className="btn-lg btn-block mt-5 ">
                                Sign Up
                        </Button>
                        <div className='form-inputs'>
                            <p className="text-danger text-center h4">
                                {this.state.dataResponse}
                            </p>
                        </div>          
                    </Form>
                    <p className="sign text-center text-white p-3 h3">
                          Already have an account? <a href="/login_page">Sign In</a>
                    </p>
                </Col>
            </Row>

        );
    }
}
