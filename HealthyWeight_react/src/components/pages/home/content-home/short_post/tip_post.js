import React from "react";
import { NavItem } from "react-bootstrap";
import { Card, CardBody, CardImg, CardTitle, CardText, Col } from "reactstrap";

class TipPost extends React.Component{
        render(){
            return(
                <Col md="4" className="card-deck" >
                        {this.props.tips.map((item,i) => (
                        <Card className="my-4 p-3 "  id="cardCaro">
                            <CardImg src = {process.env.PUBLIC_URL + item.image} alt="Card image cap"/>
                            <CardBody>
                                <CardTitle tag="h3">{item.title}</CardTitle>
                                <CardText>
                                    {item.text}
                                </CardText>
                            </CardBody>
                        </Card>
                            ))}
                   
                </Col>
                );
            }
    }

export default TipPost;
