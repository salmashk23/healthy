import React, { Component } from "react";
import { Form, Input, FormGroup , Label, Row, Col  } from 'reactstrap';
import BodyItems from "./body_items.js";


 export default class BodyOption extends Component {
    render() {
        return (
            <Form className="mt-3" >
                <Row>
                    {BodyItems.map((item => {
                        return(

                            <Col md="6" className="mb-2" >
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
                           )
                       }
               </Row>
            </Form>
        );
    }
}
