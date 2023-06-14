import React, { useState } from "react";
import { Button, Modal, Title } from "react-bulma-companion";
import UserService from "../../../services/users";
import { Navigate } from "react-router-dom";
import { Fragment } from "react";
import ModalCardTitle from "react-bulma-companion/lib/Modal/ModalCardTitle";

function UsersDelete() {
  const [redirectToHome, setRedirectToHome] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const modalDelete = () => {
    openModal();
  };

  const deleteUser = async () => {
    try {
      await UserService.delete();
      setRedirectToHome(true);
    } catch (error) {
      // Trate o erro de acordo com suas necessidades
      return alert("Erro ao excluir a conta:");
    }
  };

  if (redirectToHome == true)
    return <Navigate replace to={{ pathname: "/" }} />;

  return (
    <Fragment>
      <Button color="danger" onClick={modalDelete}>
        Excluir conta
      </Button>
      <Modal active={showModal}>
        <Modal.Background />
        <Modal.Card>
          <Modal.CardHead>
            <Title size="4">
              Are you sure you wish to delete this account?
            </Title>
            <Modal.Close size="large" onClick={closeModal} />
          </Modal.CardHead>
          <Modal.CardBody>
            <Title size="6" subtitle>
              You won't be able to recover this account once deleted!
            </Title>
          </Modal.CardBody>
          <Modal.CardFoot>
            <Button color="danger" className="btn" onClick={() => deleteUser()}>
              Delete Account
            </Button>
            <Button color="" className="btn" onClick={closeModal}>
              Cancel
            </Button>
          </Modal.CardFoot>
        </Modal.Card>
      </Modal>
    </Fragment>
  );
}

export default UsersDelete;
