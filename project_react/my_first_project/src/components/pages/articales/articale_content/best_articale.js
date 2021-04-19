import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Card, CardBody, CardTitle, CardText,CardFooter, Button ,CardImg} from 'reactstrap';
import BestItems from "./best_items.js";
import "../../../general/card_carousel/card_carousel.css";

class BestCard extends React.Component{
    render(){
        return(
            <Container className="mt-5 mb-5 cards-container" >

                {BestItems.map((item => {
                    return(
                            <Card className="card text-center" id="cardCaro" >
                                <CardImg  src={item.image} alt="Card image cap"></CardImg>
                                <CardBody>
                                    <CardTitle className="text-dark " tag="h3">{item.title}</CardTitle>
                                    <CardText tag="h4">
                                            {item.summary}
                                    </CardText>
                                </CardBody>
                                <Button className="ml-5 mr-5 mb-3 bg-dark"  id="more"><a href={item.link} >More Info</a></Button>
                                <CardFooter className="text-muted">{item.time}</CardFooter>
                            </Card>
                                )
                            }
                        )
                    )
                }
            </Container>
            );
        }
    }
export default BestCard;
