import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText , Col } from "reactstrap";
import Try from "./try_modal.js";

class BmiCard extends React.Component{
        render(){
            return(
                <Col md="4" className="card-deck" >
                    <Card className="my-4 p-3 " id="cardCaro">
                        <CardImg src = {process.env.PUBLIC_URL + '/img/img_home/img-post/bmi1.jpg'} alt="Card image cap"/>
                        <CardBody>
                            <CardTitle tag="h3">BMI Calculator</CardTitle>
                            <CardText>
                                Body mass index (BMI) is a measure of
                                body fat based on height and weight that applies
                                to adult men and women.
                            </CardText>
                        </CardBody>
                        <Try/>
                    </Card>
                </Col>
            );
        }
    }

export default BmiCard;
