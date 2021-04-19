import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText, Button, Col, Row} from "reactstrap";
import BmiCalc from "./bmi_calc.js";
import Try from "./try.js";

class BmiCard extends React.Component{
        render(){
            return(
                <Col md="4" className="card-deck" >
                    <Card className="my-4 p-3 ">
                        <CardImg src = {process.env.PUBLIC_URL + '/img/img_home/img-post/bmi1.jpg'} alt="Card image cap"/>
                        <CardBody>
                            <CardTitle tag="h3">Bmi Calculator</CardTitle>
                            <CardText>
                                Body mass index (BMI) is a measure of
                                body fat based on height and weight that applies
                                to adult men and women.
                            </CardText>
                        </CardBody>
                        <Button variant="outline-dark" className="p-0"><Try/></Button>
                    </Card>

                </Col>
                );
            }
    }

export default BmiCard;
