import React from 'react';
import {Container, Card, CardBody, CardTitle, CardFooter, CardText, Button ,CardImg} from 'reactstrap';
import Slider from "react-slick";
import "../../../../general/card_carousel/card_carousel.css";

class BestCard extends React.Component{
        render(){
            const settings = {

             dots: false,
             infinite: true,
             speed: 500,
             slidesToShow: 3,
             slidesToScroll: 1
        };
            return(
                <Container className="cards-container">
                    <Slider {...settings}>
                    {this.props.best.Best.map((item,i) => {
                        return(
                            <div key={i} className="card-deck">
                                <Card className="cardd text-center" id="cardCaro" >
                                    <CardImg  src={process.env.PUBLIC_URL + '/img/img-article/best.jpg'} alt="Card image cap"></CardImg>
                                    <CardBody>
                                        <CardTitle className="card-title mb-3">{item.title}</CardTitle>
                                        <CardText className="card-text">
                                                {item.summary}
                                        </CardText>
                                    </CardBody>
                                    <CardFooter>
                                        {item.time}
                                    </CardFooter>
                                    <a href={item.link}>
                                        <Button className=" btn-outline-light btn-block"  id="more"> More Info </Button>
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

export default BestCard;
