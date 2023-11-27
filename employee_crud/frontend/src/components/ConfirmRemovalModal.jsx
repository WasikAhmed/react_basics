import React, { useState } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";

const ConfirmRemovalModal = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal((previousModal) => !previousModal);
  };

  const deleteEmployee = (pk) => {
    axios.delete(API_URL + pk).then(() => {
      props.resetState();
      toggle();
    });
  };

  return (
    <>
      <Button color="danger" onClick={toggle}>
        Remove
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          Do you really want to delete the employee?
        </ModalHeader>
        <ModalFooter>
          <Button type="button" onClick={toggle}>
            Cancel
          </Button>
          <Button
            type="button"
            color="primary"
            onClick={() => deleteEmployee(props.pk)}
          >
            Yes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ConfirmRemovalModal;
