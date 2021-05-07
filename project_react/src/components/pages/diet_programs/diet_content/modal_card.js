import React, { useState } from "react";
import Modal  from "react-modal";
import {Button , ModalHeader, ModalBody, ModalFooter, Row, Col, ListGroup ,ListGroupItem} from "reactstrap";
import RecipeItem from "./recipes/recipe_item.js";
import "../../../general/modal/modal_card.css";
import Rating from "../../../general/rating/rating.js";


Modal.setAppElement("#root");

export default function Modaling() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }


  return (
    <div className="modall container">
      <Button onClick={toggleModal} className=" mb-4 btn-outline-light btn-block" id="more" > More Info</Button>
          {this.info.RecipeInfo.map((recipe => (
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay">
              <ModalHeader>
                  <h3 className="text-center"> {recipe.title} </h3>
                  <p className="text-center"> by Good Food Team </p>
                  <p className="text-center"> rating: <Rating/> </p>
              </ModalHeader>
              <ModalBody>
                <ul>
                  {recipe.ingredients.map((item => (
                    <li className="text-dark" >{item.ingredients}</li>
                   )))}
               </ul>
            </ModalBody>
            <Button onClick={toggleModal} color="primary" > Close Recipe</Button>
        </Modal>
    )))}
    </div>
  );
}
