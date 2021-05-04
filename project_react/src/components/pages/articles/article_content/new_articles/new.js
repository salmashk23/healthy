import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Card, CardBody, CardTitle, CardText,CardFooter, Button ,CardImg} from 'reactstrap';
import Slider from "react-slick";
import NewItems from "./new_items.js";
import "../../../../general/card_carousel/card_carousel.css";

class NewCard extends React.Component{
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
                <Container>
                    <Slider {...settings}>
                    {this.props.new.New.map((item => {
                        return(
                            <div className="card-deck">
                                <Card className="cardd text-center p-3" id="cardCaro" >
                                    <CardImg  src={process.env.PUBLIC_URL + '/img/img-article/new.jpg'} alt="Card image cap"></CardImg>
                                    <CardBody>
                                        <CardTitle className="mb-5" tag="h3">{item.title}</CardTitle>
                                        <CardText tag="h4">
                                                {item.summary}
                                        </CardText>
                                    </CardBody>
                                    <a href={item.link}>
                                        <Button className=" btn-outline-light btn-block"  id="more">More Info</Button>
                                    </a>
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
export default NewCard;
