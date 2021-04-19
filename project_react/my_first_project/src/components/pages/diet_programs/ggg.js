import React , { PropTypes } from "react";
import {Container, CardBody, CardTitle, CardText, Button ,CardImg, Col, Row} from 'reactstrap';
import DietItems from './diet_content/diet_items.js';
import "./diet_content.css"

const Card = (props) => (
  <div className="card text-center" id="diet">
    <CardImg src={ props.image } alt="Card image cap" />
          <CardTitle tag="h3">{ props.title }</CardTitle>
          <CardBody>
              <CardText tag="h4">{ props.summary }</CardText>
          </CardBody>
        <Button className="ml-5 mr-5 mb-3 bg-dark" >More Info </Button>
  </div>
);

const CardContainer = (props) => (
  <div className="cards-container">
    {
      props.cards.map((card) => (
        <Card title={ card.title }
          summary={ card.summary }
          image={ card.image } />

      )
  )
    }

  </div>
);

class DietContent extends React.Component {
  render () {
    return(
      <Container className="justify-content-center ">
            <h3 className="display-3 text-center m-4" id="title">
              Diet Programs
            </h3>

            <CardContainer cards={ DietItems } />

      </Container>
    );
  }
}

export default Caro;
