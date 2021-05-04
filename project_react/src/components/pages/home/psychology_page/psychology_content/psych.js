import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

import PsychItems from "./psych_items.js";



class Psycho extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
                <div className="card-deck ml-5 mr-5">
                        {this.props.psych.Psych.map((item => {
                                return(
                                        <Card className="m-4" id="psych">
                                            <CardImg  src={process.env.PUBLIC_URL + item.image} alt="Card image cap"></CardImg>
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
