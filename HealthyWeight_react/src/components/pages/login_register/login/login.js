import React from "react";
import {  Button, Input, FormGroup , Form, Label, Col, Row } from 'reactstrap';
import { useHistory } from "react-router-dom";
import  "../login_register.css";

export default class Login extends React.Component {
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

        //Email

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
       //Password
       if (!fields["password"]) {
           formIsValid = false;
           errors["password"] = "Please enter your password.";
       }

       this.setState({errors: errors});
       return formIsValid;
   }

    handleSubmit = async e => {
    e.preventDefault();
    let isValid = this.handleValidation();
    if (isValid) {
      //sending form data on button submition clicked 
        fetch('/login_page', {
        method: 'POST',
        body: JSON.stringify({ "email": this.state.fields["email"], "password": this.state.fields["password"] }),
        headers: {
          'Content-Type' : 'application/json'
        }
      })
      .then(res => res.json())
      .then(json => {
        if (json.res === true) {
          window.location.replace("/");
        } else {
          this.setState({ dataResponse: json.res })
        }
      }
      );
    }}
    handleChange(field, e){ 
        e.preventDefault();        
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }
   
    render() {
        return (  
            <Row className=" justify-content-center m-5">
                <Col sm="6">
                    <Form
                        method="POST"
                        className="text-white p-5" 
                        id="logreg-content">
                        <h3 className="text-center h2">LOG IN</h3>
                        <p className="text-center h4 mb-5">Welcome Back, Please Login To Your Account</p>
                        {this.props.content.map((item,i) => (
                            <FormGroup  key={i}>
                                <Label id={item.name_id} check={item.checked} >{item.label}</Label>
                                <Input
                                     type={item.type}
                                     className={item.cName}
                                     placeholder={item.placeholder}
                                     name={item.value}
                                     onChange={this.handleChange.bind(this, item.value)} 
                                     value={this.state.fields[item.value]}
                                    />
                                <div className="text-warning">{this.state.errors[item.value]}</div>
                            </FormGroup>
                            ))}
                        <Button 
                            onClick={this.handleSubmit} 
                            type="submit" 
                            outline color="light" 
                            className="signBtn btn-lg btn-block mb-4">
                                Sign In
                        </Button>
                        <p className="forgot-password text-center">
                            Forgot Your <a href="#">Password?</a>
                        </p>
                        <div className='form-inputs'>
                            <p className="text-danger text-center h4">
                                {this.state.dataResponse}
                            </p>
                        </div>
                    </Form>
                    <p className="sign text-center text-white p-3 h3">
                        Don't have an account? <a href='/register_page' >Sign Up</a>
                    </p>
                </Col>
            </Row>
        );
    }
}
