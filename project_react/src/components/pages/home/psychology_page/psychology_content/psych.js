import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

import PsychItems from "./psych_items.js";



class Psycho extends React.Component{
    render(){
        return(
                <div className="card-deck ml-5 mr-5">
                        {PsychItems.map((item => {
                                return(
                                        <Card className="m-4" id="psych">
                                            <CardImg  src={item.image} alt="Card image cap"></CardImg>
                                            <CardBody>
                                                 <CardTitle tag="h3">{item.name}</CardTitle>
                                                 <CardText>
                                                        {item.about}
                                                 </CardText>
                                            </CardBody>
                                            <Button className="m-3 p-2 btn-outline-light" id="more">Chat Now</Button>
                                        </Card>
                                    )
                                }
                            )
                        )
                    }
                </div>
                );
            }
    }
export default Psycho;
