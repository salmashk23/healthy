import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Card, CardBody, CardTitle, CardText, Button ,CardImg} from 'reactstrap';
import Slider from "react-slick";
import RecipeItems from "./recipe_items.js";
import Modaling from "./modal_card.js";
import "./recipe.css";
import "../../../../general/card_carousel/card_carousel.css";
import Rating from "../../../../general/rating/rating.js";


class RecipeCard extends React.Component{
    render(){
        const settings = {

                 dots: false,
                 infinite: true,
                 speed: 500,
                 slidesToShow: 3,
                 slidesToScroll: 1
             };
        return(
            <Container className="cards-container" >
                <Slider {...settings}>
                {RecipeItems.map((item => {
                    return(
                        <div className="card-deck">
                            <Card className="card text-center" id="cardCaro" >
                                <CardImg  src={item.image}  alt="Card image cap"></CardImg>
                                <CardBody>
                                    <CardTitle className="text-dark mb-3" tag="h3">{item.title}</CardTitle>
                                    <CardText tag="h4">
                                            {item.summary}
                                    </CardText>
                                    <Rating/>
                                </CardBody>
                                <Button className="m-4 p-0 bg-dark" id="boton"><Modaling/></Button>
                            </Card>
                            </div>
                                )
                            }
                        )
                    )
                }
                </Slider>
            </Container>
            );
        }
    }
export default RecipeCard ;
