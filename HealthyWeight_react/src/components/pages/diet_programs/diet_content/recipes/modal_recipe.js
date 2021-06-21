import React , { Component , Fragment } from 'react';
import { Card, CardSubtitle,CardBody, Row,
         CardTitle, CardText, Button ,CardImg, Col,
         ModalHeader, ModalBody, ListGroupItem , ListGroup } from 'reactstrap';
import Modal from 'react-modal';
import Slider from 'react-slick';
import AddRecipe from './addRecipe.js';
import Modall from './ggg.js'
import Rating from '../../../../general/rating/rating.js';

class RecipeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeList: this.props.recipeItems,
      cardIndex: null,
      isModalOpen: false,
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
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1}
      
    return (
      <Fragment>
        <Slider {...settings}>
        {recipeList.map((recipe, index) => {
          return (
            <div
              className="card-deck"
              key={recipe.id}
              onClick={e => this.toggleModal(index)}
            >
              <Card className="cardd text-center" id="cardCaro">
                <CardImg src={recipe.image} width="240px" height="240px" alt={recipe.name} />
                <CardBody>
                  <CardTitle className="mb-3 card-title">{recipe.name}</CardTitle>
                  <CardSubtitle tag="h5">
                    <p>{recipe.written_by} </p>
                    <p><Rating/></p> 
                  </CardSubtitle>
                  <CardText className="card-text">{recipe.description}</CardText>
                </CardBody>
              </Card>
            </div>
          );
        })}
        <Modal
          isOpen={this.state.isModalOpen}
          toggle={e => this.toggleModal(cardIndex)}
          className="mymodal"
          overlayClassName="myoverlay"
        >
          <ModalHeader className="text-center">
            <h3>{cardIndex !== null && recipeList[cardIndex].name} </h3>
            <p >{cardIndex !== null && recipeList[cardIndex].written_by} <br/></p>
            <p><Rating/></p>
          </ModalHeader>
          <ModalBody>
              <Row>
              <Col>
              <h4>Ingredients</h4>
              <ListGroup>
                  {cardIndex !== null && recipeList[cardIndex].ingredients.split(';').map((ingredient,index)=>(
                         <ListGroupItem key={index} className="p-2"> {ingredient} </ListGroupItem>
                  ))}
              </ListGroup>
              </Col>
              <Col>
              <h4>Steps</h4>
              <ListGroup>
                  {cardIndex !== null && recipeList[cardIndex].steps.split(';').map((step,index)=>(
                         <ListGroupItem key={index} className="p-2"> {step} </ListGroupItem>
                  ))}
              </ListGroup>
              </Col>
               </Row>
               <Button className="btn-warning btn-block" id="more" onClick={e => this.toggleModal(cardIndex)}> close </Button>
          </ModalBody>
        </Modal>
        </Slider>     
      </Fragment>
    );
  }
}

export default RecipeModal;
