import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText, Button, Col, Row} from "reactstrap";

class TipPost extends React.Component{
        render(){
            return(
                <Col md="4" className="card-deck" >
                    <Card className="my-4 p-3 ">
                        <CardImg src = {process.env.PUBLIC_URL + '/img/img_home/img-post/tip.jpg'} alt="Card image cap"/>
                        <CardBody>
                            <CardTitle tag="h3">Today's Tip</CardTitle>
                            <CardText>
                                Did you know that a reasonable and safe weight
                                loss is 1–2 pounds per week? While it may take
                                as long as 6 months to lose 5–10 percent of
                                your body weight, it will make it easier
                                to keep off the weight.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                );
            }
    }

export default TipPost;
