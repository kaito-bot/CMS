
import StudentDataForm from "../StudentDataForm/StudentDataForm";
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function StudentModalComponent(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Add New Student
      </Button>
      
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <StudentDataForm toggle = {toggle}/>
          </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter> */}
      </Modal>
    </div>
  );
}


export default StudentModalComponent;