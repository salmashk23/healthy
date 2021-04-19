import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText, Button, Col, Row} from "reactstrap";
import TipPost from "./tip_post.js";
import BmiCard from "./bmi_card/bmi_card.js";
import ArticalePost from "./articale_post.js";
import  "./short_post.css";


class ShortPost extends React.Component{
    render(){
  return (
      <div>
      <Row className="justify-content-center m-5" >
                <TipPost/>
                <ArticalePost />
                <BmiCard/>
        </Row>
    </div>
      );
    }
}
export default ShortPost;
