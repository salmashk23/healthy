import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import PsychItems from "./psych_items.js";
import Notes from "./notes.js"

class Psycho extends React.Component{
    render(){
        return(
            < >

                <h3 className="display-3 text-center mt-5" id="title" > Our Psychologists </h3>

                <div className="card-deck ml-5 mr-5">
                        {PsychItems.map((item => {
                                return(
                                        <Card className="m-4">
                                            <CardImg  src={item.image} alt="Card image cap"></CardImg>
                                            <CardBody>
                                                 <CardTitle tag="h3">{item.name}</CardTitle>
                                                 <CardText>
                                                        {item.about}
                                                 </CardText>
                                            </CardBody>
                                            <Button variant="outline-dark" className="m-3 p-2">See Profile</Button>
                                        </Card>
                                    )
                                }
                            )
                        )
                    }
                </div>
                <Notes/>
            </>
                );
            }
    }
export default Psycho;
