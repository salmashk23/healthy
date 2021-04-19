import React, { Component } from "react";
import { Form, Input, FormGroup , Label, Col , Row  } from 'reactstrap';
import QuestItems from "./quest_items.js";


export default class QuestOption extends Component {
   render() {
       return (
           <Form className="mb-3">
               <Row>
                   {QuestItems.map((item => {
                       return(
                         <Col md="6" className="mb-2" >

                              <Label>{item.label}</Label>
                              <Input type={item.type} className={item.cName} id={item.id}>
                                  <option selected disabled>{item.name}</option>
                                  <option  value={item.value_1} >{item.name_1}</option>
                                  <option  value={item.value_2}>{item.name_2}</option>
                                  <option  value={item.value_3}>{item.name_3}</option>
                               </Input>

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
