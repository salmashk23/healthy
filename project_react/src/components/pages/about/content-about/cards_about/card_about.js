import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardImg, CardBody, CardTitle, CardText, CardDeck, Container } from 'reactstrap';
import "./card_about.css";
// import CardItems from "./card_items.js";

class CardAbout extends React.Component{
    constructor(props) {
    super(props);

  }

    render(){
        return(
            <Container>
                <div className="card-deck car">
                        {this.props.card.Card.map((item => {
                                return(
                                        <Card className="my-4 p-3" id="card-about">
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
                        )
                    }
                </div>
            </Container>
                );
            }
    }
export default CardAbout;
