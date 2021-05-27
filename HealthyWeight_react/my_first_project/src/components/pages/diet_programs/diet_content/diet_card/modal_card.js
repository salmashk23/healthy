import React, { useState } from "react";
import Modal  from "react-modal";
import {Button , ModalHeader, ModalBody, ModalFooter, Row, Col} from "reactstrap";
import "./modal_card.css";
import Rating from "../../../../general/rating/rating.js";


Modal.setAppElement("#root");

export default function Modaling() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="modall">
      <Button onClick={toggleModal} >More Info</Button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
      >
        <ModalHeader>
            <h3 className="text-center"> Creamy chicken & Asparagus Braise </h3>
            <p className="text-center"> by Good Food Team </p>
            <p className="text-center"> rating: <Rating/> </p>
        </ModalHeader>
        <ModalBody>
        <Row>
        <Col md={6}>
            <h4>Ingredients</h4>
            <ul className="h5">
              <li className="p-1">1 tbsp rapeseed oil</li>
              <li className="p-1"> className="p-3"2 skinless chicken breasts (about 150g each)</li>
              <li className="p-1">10 medium asparagus spears , each cut into 3</li>
              <li className="p-1">1 large or 2 small leeks , well washed and thickly sliced</li>
              <li className="p-1">3 celery sticks , sliced</li>
              <li className="p-1">200ml reduced-salt vegetable bouillon</li>
              <li className="p-1">140g frozen peas</li>
              <li className="p-1">1 egg yolk</li>
              <li className="p-1">4 tbsp natural bio yogurt</li>
              <li className="p-1">1 garlic clove , finely grated</li>
              <li className="p-1">⅓ small pack fresh tarragon , chopped</li>
              <li className="p-1">new potatoes , to serve (optional)</li>
            </ul>
            </Col>
            <Col md={6}>
            <h4>Method</h4>
            <ul className="h5 ">
              <li className="p-3">STEP 1 :Heat the oil in a large non-stick frying pan and fry the chicken for 5 mins,
              turning to brown both sides.</li>
              <li className="p-3">STEP 2 :Add the asparagus (reserve the tips), leeks and celery, pour in the bouillon and
              simmer for 10 mins. Add the asparagus tips and peas, and cook for 5 mins more.</li>
              <li className="p-3">STEP 3: Meanwhile, stir the egg yolk with the yogurt and garlic. Stir the yogurt mixture
               into the vegetables and add the tarragon. Divide between two warm plates, then
                place the chicken on top of the vegetables. Serve with new potatoes, if you like.</li>
            </ul>
              </Col>
              </Row>
        </ModalBody>
        <Button onClick={toggleModal} color="primary"  > Close Recipe</Button>

      </Modal>
    </div>
  );
}
