import React, { Component } from "react";
import { Form, Input, Label, Col , Row  } from 'reactstrap';



export default class QuestOption extends Component {
   render() {
       return (
           <Form className="mb-3">
               <Row>
                   {this.props.quest.Quest.map((item,i) => {
                       return(
                         <Col key={i}  md="6" className="mb-2" >

                              <Label>{item.label}</Label>
                              <Input type={item.type} className={item.cName} id={item.name_id} value={item.valued}>
                                  <option selected disabled>{item.name}</option>
                                  <option  value={item.value_1} >{item.name_1}</option>
                                  <option  value={item.value_2}>{item.name_2}</option>
                                  <option  value={item.value_3}>{item.name_3}</option>
                               </Input>

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
