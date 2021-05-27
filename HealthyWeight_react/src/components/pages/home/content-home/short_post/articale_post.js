import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText, Button, Col } from "reactstrap";


class ArticalePost extends React.Component{
        render(){
            return(
                <Col md="4" className="card-deck" >
                    {this.props.art.map((item,i) => (
                        <Card className="my-4 p-3 "  id="cardCaro">
                            <CardImg src = {process.env.PUBLIC_URL + item.image} alt="Card image cap"/>
                            <CardBody>
                                <CardTitle tag="h3">{item.title}</CardTitle>
                                <CardText>
                                    {item.text}
                                </CardText>
                            </CardBody>
                            <a href={item.url} >
                                <Button className="btn-outline-light btn-block" id="more" >{item.button_name}</Button>
                            </a>
                        </Card>
                        ))}  
                 </Col>
                );
            }
    }

export default ArticalePost;
