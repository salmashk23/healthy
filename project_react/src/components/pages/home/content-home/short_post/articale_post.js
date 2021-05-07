import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText, Button, Col } from "reactstrap";


class ArticalePost extends React.Component{
        render(){
            return(
                <Col md="4" className="card-deck" >
                    <Card className="my-4 p-3"  id="cardCaro">
                        <CardImg src = {process.env.PUBLIC_URL + '/img/img_home/img-post/articles.jpg'} alt="Card image cap"/>
                        <CardBody>
                            <CardTitle tag="h3">Week's Articale</CardTitle>
                            <CardText>
                                As “superfood” is not a medical term, there is no standard criteria
                                 or legal definition to classify foods in that category.
                                  The food industry largely uses..
                            </CardText>
                        </CardBody>
                        <a href="https://www.medicalnewstoday.com/articles/superfoods-for-weight-loss" >
                            <Button className="btn-outline-light btn-block" id="more" >More Info</Button>
                        </a>
                    </Card>
                </Col>
                );
            }
    }

export default ArticalePost;
