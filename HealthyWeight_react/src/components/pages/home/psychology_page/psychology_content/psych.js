import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import Chat from  './chat_psych.js';


class Psycho extends React.Component{
    render(){
        return(
            <div className="card-deck ml-5 mr-5">
                {this.props.psych.Psych.map((item,i) => {
                    return(
                        <Card className="m-4" id="psych">
                            <CardImg  src={process.env.PUBLIC_URL + item.image} alt="Card image cap"></CardImg>
                            <CardBody>
                                <CardTitle tag="h3">{item.name}</CardTitle>
                                    <CardText>
                                        {item.about}
                                    </CardText>
                                </CardBody>
                                    <Button className="m-3 p-2 btn-outline-light" id="more">Chat Now </Button>
                        </Card>
                            )
                        }
                    )
                 }
            </div>
        );
    }
}

export default Psycho;
