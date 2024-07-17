
import StudentDataForm from "../StudentDataForm/StudentDataForm";
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EmployeeDataForm from "../EmployeeDataForm/EmployeeDataForm";
import './Modal.css';

function ModalComponent(args) {
  const [modal, setModal] = useState(false);
  const [isStudentForm, setStudentForm] = useState(true); 
  const toggle = () => setModal(!modal);

  return (
    <div>

        <button className="addnewrecord" onClick={toggle}>
        Add New Record
      </button>
      
     
      
      
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Add a Record</ModalHeader>
        <ModalBody>
        <div className="Modalbuttonwrapper">
        <button className="Modalbutton" onClick={() => setStudentForm(true)}>Add Student</button>
        <button className="Modalbutton" onClick={() => setStudentForm(false)}>Add Employee</button>
      </div>
          {isStudentForm? <StudentDataForm toggle = {toggle}/> : <EmployeeDataForm toggle={toggle}/>}
          </ModalBody>
      </Modal>
    </div>
  );
}


export default ModalComponent;