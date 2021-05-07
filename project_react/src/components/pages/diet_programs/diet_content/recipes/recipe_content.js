import React, { Component } from 'react';
import Modal from 'react-modal';
import { ListGroup ,ListGroupItem, Button , Row , Col, Container, ModalHeader,ModalFooter} from "reactstrap";
import "./recipe_content.css";
import Rating from "../../../../general/rating/rating.js";

class Modaling extends Component {
  state = {
    modalIsOpen: false,
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };



  render() {
      if(!this.props.info){
          return ("ops");
      }
    return (
      <div  >
        <Button onClick={this.openModal} className=" mb-4 p-2 btn-outline-light btn-block" id="more" >More Info</Button>
                    <div accordion="true"  className="recipes">
                      {this.props.info.RecipeInfo.map((recipe, index) => (
                        <Modal
                             isOpen={this.state.modalIsOpen}
                             onRequestClose={this.closeModal}
                             eventKey={index}
                             key={index}
                             contentLabel="My dialog"
                             className="mymodal"
                             overlayClassName="myoverlay" >
                             <ModalHeader>
                                 <h3 className="text-center"> {recipe.title} </h3>
                                 <p className="text-center"> by Good Food Team </p>
                                 <p className="text-center"> Rating: <Rating/> </p>
                             </ModalHeader>
                          <div className="modal-body" collapsible="true">
                              <Container>
                                  <Row>
                                     <Col>
                            <ListGroup>
                                <h4 className="text-primary">Ingredient</h4>
                              {recipe.ingredients.map((ingredient, index) => (
                                <ListGroupItem className="listmodal p-2" key={index}>{ingredient}</ListGroupItem>
                              ))}
                            </ListGroup>
                            </Col>
                            <Col>
                            <ListGroup>
                                <h4 className="text-primary">Steps</h4>
                              {recipe.steps.map((step, index) => (
                                <ListGroupItem className="listmodal p-2" key={index}>{step}</ListGroupItem>
                              ))}
                            </ListGroup>
                            </Col>
                            </Row>
                        </Container>
                            </div>
                            <ModalFooter>
                            <Button onClick={this.closeModal} className="btn-outline-primary">close</Button>
                            </ModalFooter>
                        </Modal>
                      ))}
                  </div>
      </div>
    );
  }
}

export default Modaling;
