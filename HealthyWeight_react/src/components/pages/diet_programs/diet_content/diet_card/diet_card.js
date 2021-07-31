import React from 'react';
import {Container, Card, CardBody, CardTitle, CardText, Button ,CardImg} from 'reactstrap';
import Slider from "react-slick";
import "../../../../general/card_carousel/card_carousel.css";


class DietCard extends React.Component{
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
                    {this.props.diet.map((item,i) => {
                        return(
                            <div key={i} className="card-deck">
                                <Card className="cardd text-center" id="cardCaro" >
                                    <CardImg  src={process.env.PUBLIC_URL + item.image} alt="Card image cap"/>
                                    <CardBody>
                                        <CardTitle className="mb-3 card-title" >{item.title}</CardTitle>
                                        <CardText className="card-text">
                                            {item.summary}
                                        </CardText>
                                    </CardBody>
                                    <a href={item.url}>
                                        <Button className="btn-outline-light btn-block" id="more">
                                            More Info
                                        </Button>
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

export default DietCard;
