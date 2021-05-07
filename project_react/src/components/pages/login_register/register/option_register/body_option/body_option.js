import React, { Component } from "react";
import { Form, Input, FormGroup , Row, Col  } from 'reactstrap';


 export default class BodyOption extends Component {
    render() {
        return (
            <Form className="mt-3" >
                <Row>
                    {this.props.body.Body.map((item,i) => {
                        return(

                            <Col md="6" key={i} className="mb-2" >
                               <FormGroup className="text-white" >

                                       <h5> {item.title} </h5> <Input type="number" required/>
                                       <select  className="form-select text-dark"  >
                                           <option value={item.value_1}  selected="selected">{item.name_1}</option>
                                           <option value={item.value_2}>{item.name_2}</option>
                                       </select>
                               </FormGroup>
                           </Col>

                                       )
                                   }
                               )
                          }
               </Row>
            </Form>
        );
    }
}
