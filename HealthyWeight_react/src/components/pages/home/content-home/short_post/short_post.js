import React from "react";
import { Row } from "reactstrap";
import TipPost from "./tip_post.js";
import BmiCard from "./bmi_card/bmi_card.js";
import ArticalePost from "./articale_post.js";
import  "./short_post.css";


class ShortPost extends React.Component{
  render(){
    return (
      <div>
        <Row className="justify-content-center my-3">
          <TipPost tips={this.props.short.Tips}/>
          <ArticalePost art={this.props.short.ArtPost} />
          <BmiCard/>
        </Row>
      </div>
    );
  }
}
export default ShortPost;
