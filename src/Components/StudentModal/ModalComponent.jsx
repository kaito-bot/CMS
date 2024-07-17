
import StudentDataForm from "../StudentDataForm/StudentDataForm";
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EmployeeDataForm from "../EmployeeDataForm/EmployeeDataForm";

function ModalComponent(args) {
  const [modal, setModal] = useState(false);
  const [isStudentForm, setStudentForm] = useState(true); 
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Add New Record
      </Button>
      
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Add a Record</ModalHeader>
        <ModalBody>
        <div>
        <button onClick={() => setStudentForm(true)}>Add Student</button>
        <button onClick={() => setStudentForm(false)}>Add Employee</button>
      </div>
          {isStudentForm? <StudentDataForm toggle = {toggle}/> : <EmployeeDataForm toggle={toggle}/>}
          </ModalBody>
      </Modal>
    </div>
  );
}


export default ModalComponent;