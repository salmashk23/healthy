import React, { useState } from "react";
import Modal  from "react-modal";
import {Button , ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import BmiCalc from "./bmi_calc.js";
import "./try.css"

Modal.setAppElement("#root");

export default function Try() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="try">
      <Button onClick={toggleModal} >Try It</Button>

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
        <Button onClick={toggleModal} color="primary" > Close modal</Button>

      </Modal>
    </div>
  );
}
