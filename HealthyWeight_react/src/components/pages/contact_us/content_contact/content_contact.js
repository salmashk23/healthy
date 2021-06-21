import React from "react";
import { Button, Input, FormGroup , Col, Row, Form, Label } from 'reactstrap';
import './content_contact.css';


class ContentContact extends React.Component{
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
 
         //Name
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
        //Message
        if(!fields["message"]){
            formIsValid = false;
            errors["message"] = "Can't be empty";
         }
 
        this.setState({errors: errors});
        return formIsValid;
    }
     
    contactSubmit(e){
         e.preventDefault();
 
         if(this.handleValidation()){
            alert("Thank you for contacting us, we will get back to you soon");
         }
     }
 
    handleChange(field, e){         
         let fields = this.state.fields;
         fields[field] = e.target.value;        
         this.setState({fields});
     }
    render(){
        return (
            <Row className=" justify-content-center">
                <Col sm="6">
                    <Form id="contact-form" className="m-5 p-5 text-white" onSubmit= {this.contactSubmit.bind(this)}>
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
                                        onChange={this.handleChange.bind(this, item.value)}
                                        value={this.state.fields[item.value]} 
                                        />
                                    <div className="h5 text-warning">{this.state.errors[item.value]}</div>
                                </FormGroup>
                                    )
                                }
                            )
                        }
                        <Button type="submit" outline color="light" className="btn-lg btn-block mt-5 " id="send" >
                                Send
                        </Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default ContentContact;
