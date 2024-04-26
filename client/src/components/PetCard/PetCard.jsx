import React, { useState } from "react";
import "./PetCard.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";




function PetCard({ pet }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const adoptPet = () => {
    Swal.fire({
      title: "¡Mascota Adoptada!",
      icon: "success",
      text: `¡Has adoptado a ${pet.name}!`,
      confirmButtonText: "Aceptar",
    }).then((result) => {
      if (result.isConfirmed) {
        closeModal();
      }
    });
  };

  return (
    <div className="card">
      <div className="containerImages">
        {/*  <img src={pet.image} alt="" className="Image" /> */}
      </div>
      <div className="containerTitleDescipcion">
        <div className="containerTitle">
          <h1 className="title">{pet.name}</h1>
          <div className="span"></div>
        </div>
        <p>{pet.description}</p>

        <Button onClick={openModal} className="custom-button">
          Conóceme
        </Button>
      </div>

      <Modal
        show={showModal}
        onHide={closeModal}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Más información sobre {pet.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-info">
            <span className="bold-span">Nombre:</span> {pet.name}
          </p>
          <p className="modal-info">
            <span className="bold-span">Descripción:</span> {pet.description}
          </p>
          <p className="modal-info">
            <span className="bold-span">Edad:</span> {pet.age}
          </p>
          <p className="modal-info">
            <span className="bold-span">Ubicación:</span> {pet.ubication}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/FormUser">
            <Button variant="info">Adoptar</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


export default PetCard;


