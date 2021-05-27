import React from 'react';
import { Button, Input,Form, Label, Col, Row } from 'reactstrap';
import RegisterItems from "./12.js"

class Register extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if(this.validate()){
        console.log(this.state);

        let input = {};
        input["name"] = "";
        input["email"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({input:input});

        alert('Demo Form is submited');
    }
  }

  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;

      if (!input["name"]) {
        isValid = false;
        errors["name"] = "Please enter your name.";
      }

      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }

      if (typeof input["email"] !== "undefined") {

        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }

      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }

      if (!input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
      }

      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {

        if (input["password"] != input["confirm_password"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
      }

      this.setState({
        errors: errors
      });

      return isValid;
  }

  render() {
    return (
        <Row className=" justify-content-center mt-5">
            <Col sm="6">
                <Form onSubmit={this.handleSubmit} className="text-white p-5 " id="logreg-content">
                    <h3 className="text-center h2">Register</h3>
                    <p className="text-center h4 mb-5">Lets Get You On Board</p>
                    {RegisterItems.map((item) => (
                        <div class="form-group">
                          <label for={item.name_id}>{item.label}:</label>
                          <input
                            type={item.type}
                            name={item.name_id}
                            value= {item.value}
                            onChange={this.handleChange}
                            class={item.cName}
                            placeholder={item.placeholder}
                            id={item.name_id}
                            />

                        <div className="text-danger">{item.error}</div>
                        </div>
                    ))}
                      <input type="submit" value="Submit" class="btn btn-success" />
                    </Form>
                </Col>
            </Row>
    );
  }
}

export default Register;
