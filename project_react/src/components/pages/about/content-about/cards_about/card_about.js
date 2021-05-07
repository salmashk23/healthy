import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText, Container } from 'reactstrap';
import "./card_about.css";

class CardAbout extends React.Component{
    render(){
        return(
            <Container>
                <div className="card-deck car">
                        {this.props.card.Card.map((item,i) => {
                                return(
                                        <Card key={i} className="my-4 p-3" id="card-about">
                                            <CardImg  src={process.env.PUBLIC_URL + item.image} alt="Card image cap"></CardImg>
                                            <CardBody>
                                                 <CardTitle tag="h3">{item.title}</CardTitle>
                                                 <CardText>
                                                        {item.text}
                                                 </CardText>
                                            </CardBody>
                                        </Card>
                                    )
                                }
                            )
                        }
                </div>
            </Container>
                );
            }
    }
export default CardAbout;
