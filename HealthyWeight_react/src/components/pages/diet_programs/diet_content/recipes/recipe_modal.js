import React , { Component , Fragment} from "react";
import {Container, Card, CardSubtitle,CardBody, Row,
     CardTitle, CardText, Button ,CardImg, Col,
      ModalHeader, ModalBody, ListGroupItem , ListGroup} from 'reactstrap';
import Modal from 'react-modal';
import Rating from "../../../../general/rating/rating.js";
import "./recipe_modal.css";

class RecipeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeList: this.props.recipeItems,
      cardIndex: null,
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(id) {
    console.log(id);
    this.setState({
      cardIndex: id,
      isModalOpen: !this.state.isModalOpen
    });
  }

  render() {
    const { recipeList, cardIndex } = this.state;
    console.log("CardIndex: ", cardIndex);
    console.log("Recipe: ", recipeList[cardIndex]);
    return (
      <Fragment>
        {recipeList.map((recipe, index) => {
          return (
            <div
              key={recipe.id}
              className="col-12 col-md-3 mb-0 "
              onClick={e => this.toggleModal(index)}
            >
              <Card className="cardd text-center" id="cardCaro">
                <CardImg top src={recipe.image} alt={recipe.name} />
                <CardBody>
                  <CardTitle className="h3">{recipe.name}</CardTitle>
                  <CardSubtitle className="h5">{recipe.written_by} <Rating/> </CardSubtitle>
                  <CardText className="cardesc">{recipe.description}</CardText>
                </CardBody>
              </Card>
            </div>
          );
        })}
        <Modal
          isOpen={this.state.isModalOpen}
          toggle={e => this.toggleModal(cardIndex)}
          className="recipemodal"
        >
          <ModalHeader className="text-center">

            <h3>{cardIndex !== null && recipeList.name} </h3>
            <p >{cardIndex !== null && recipeList.written_by} <br/></p>
            <p><Rating/></p>

          </ModalHeader>
          <ModalBody>
              <Row>
              <Col>
              <h4>Ingredients</h4>
              <ListGroup>
                  {cardIndex !== null && recipeList[cardIndex].ingredients.split(';').map(function(ingredient,index){
                        <ListGroupItem key={index} className="p-2"> {ingredient} </ListGroupItem>
                  })}
              </ListGroup>
              </Col>
              <Col>
                  <h4>Ingredients</h4>
                  {/* <ListGroup>
                      {cardIndex !== null && recipeList[cardIndex].ingredient_step.map(ingredient=> (
                            <ListGroupItem className="p-2"> {ingredient} </ListGroupItem>
                         ))}
                  </ListGroup> */}
              </Col>
               </Row>
               <Button className="btn-warning btn-block" id="more" onClick={e => this.toggleModal(cardIndex)}> close </Button>
          </ModalBody>

        </Modal>
      </Fragment>
    );
  }
}

export default RecipeModal;
