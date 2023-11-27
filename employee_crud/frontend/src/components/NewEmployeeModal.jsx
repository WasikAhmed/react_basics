import React, { useState, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewEmployeeForm from "./NewEmployeeForm";

const NewEmployeeModal = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal((previousModal) => !previousModal);
  };

  const create = props.create;
  let title = "Editing Employee";
  let button = (
    <Button onClick={toggle} color="primary" className="float-right" style={{ minWidth: "200px" }}>
      Edit
    </Button>
  );

  if (create) {
    title = "Creating New Employee";
    button = (
      <Button onClick={toggle}>
        Create New
      </Button>
    );
  }

  return (
    <Fragment>
        {button}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          <NewEmployeeForm resetState={props.resetState} toggle={toggle} employee={props.employee} />
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default NewEmployeeModal;
