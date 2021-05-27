import React from 'react';
import {Container, Card, CardBody, CardTitle, CardText,CardFooter,Button ,CardImg} from 'reactstrap';
import Slider from "react-slick";
import "../../../../general/card_carousel/card_carousel.css";



class FitnessCard extends React.Component{
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
                <h3 className="display-3 text-center mt-5" id="title">
                    Fitness Programs
                </h3>
                <Slider {...settings}>
                    {this.props.fit.map((item,i) => {
                        return(
                            <div key={i} className="card-deck">
                                <Card className="cardd text-center" id="cardCaro" >
                                    <CardImg  src={process.env.PUBLIC_URL + item.image} width="250px" height="250px" alt="Card image cap"/>
                                    <CardBody>
                                        <CardTitle className="mb-3 card-title">{item.title}</CardTitle>
                                        <CardText className="card-text">
                                            <u>What it is:</u> {item.summary}
                                        </CardText>
                                    </CardBody>
                                    <CardFooter>
                                        <h5>Cost: {item.cost}</h5> 
                                    </CardFooter>
                                    <a href={item.url}>
                                        <Button className="btn-outline-light btn-block" id="more">Try It</Button>
                                     </a>
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

export default FitnessCard;
