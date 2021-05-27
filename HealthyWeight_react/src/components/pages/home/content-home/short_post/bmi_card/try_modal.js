import React, { useState } from "react";
import Modal  from "react-modal";
import {Button , ModalHeader, ModalBody} from "reactstrap";
import BmiCalc from "./bmi_calc.js";
import "../../../../../../components/general/modal/modal_card.css";

Modal.setAppElement("#root");

export default function Try() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="modall">
        <Button onClick={toggleModal} className="btn-outline-light btn-block" id="more" >Try It</Button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
      >
        <ModalHeader>
            <h3 className="text-center"> BMI Calculator </h3>
        </ModalHeader>
        <ModalBody>
            <BmiCalc/>
        </ModalBody>
        <Button onClick={toggleModal} className="btn-dark m-4  pl-4 pr-4" > Close</Button>
      </Modal>
    </div>
  );
}
