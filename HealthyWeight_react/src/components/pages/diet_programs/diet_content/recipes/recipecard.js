import React, { Component } from 'react';
import { render } from 'react-dom';
import Modal from 'react-modal';
import RecipeItem from "./recipe_item.js"

class RecipeModal extends Component {
  state = {
    modalIsOpen: false,
    secondModalIsOpen: false
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
      console.log(this.props.recipeItems)
    return (
      <div>
      <button onClick={this.openModal}>Open Modal</button>
      <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
          {this.props.recipeItems.map((item => {
              return(
                  <div id={item.id}>

                        <button onClick={this.closeModal}>close</button>
                        <h3>{item.name}</h3>
                        {item.ingredients.map((ingredient => {
                            return(
                                <div>
                                    {ingredient}
                                </div>
                            )}))}

                  </div>
              )}))}
        </Modal>
      </div>
    );
  }
}

export default RecipeModal
