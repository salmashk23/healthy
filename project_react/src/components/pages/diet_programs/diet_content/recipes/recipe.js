import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Card, CardBody, CardTitle, CardText, Button ,CardImg} from 'reactstrap';
import Slider from "react-slick";
import RecipeItems from "./recipe_items.js";
import "./recipes.css";
import Modaling from "../../diet_content/modal_card.js";
import "../../../../general/card_carousel/card_carousel.css";
import Rating from "../../../../general/rating/rating.js";


class RecipeCard extends React.Component{
    constructor(props){
        super(props)
    }
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
                {this.props.recipe.Recipe.map((item => {
                    return(
                        <div className="card-deck">
                            <Card className="cardd text-center" id="cardCaro" >
                                <CardImg  src={process.env.PUBLIC_URL + item.image}  alt="Card image cap"></CardImg>
                                <CardBody>
                                    <CardTitle className=" mb-3" tag="h3">{item.title}</CardTitle>
                                    <CardText tag="h4">
                                            {item.summary}
                                    </CardText>
                                    <Rating/>
                                </CardBody>
                                <Modaling/>
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
