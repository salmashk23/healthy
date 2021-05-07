import React from 'react';
import {Container, Card, CardBody, CardTitle, CardText ,CardImg} from 'reactstrap';
import Slider from "react-slick";
import "./recipes.css";
import Modaling  from "../../diet_content/recipes/recipe_content.js";
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
                {this.props.recipe.Recipe.map((item,i) => {
                    return(
                        <div key={i} className="card-deck">
                            <Card className="cardd text-center" id="cardCaro" >
                                <CardImg  src={process.env.PUBLIC_URL + item.image}  alt="Card image cap"></CardImg>
                                <CardBody>
                                    <CardTitle className=" mb-3" tag="h3">{item.title}</CardTitle>
                                    <CardText tag="h4">
                                            {item.summary}
                                    </CardText>
                                    <Rating/>
                                </CardBody>
                                <Modaling info={this.props.recipe} />
                            </Card>
                        </div>
                                )
                            }
                        )
                    }
                </Slider>
            </Container>
            );
        }
    }
export default RecipeCard ;
