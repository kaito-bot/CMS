import React, { useState } from 'react';
import axios from 'axios';
import { Form,FormGroup, Label,Input } from 'reactstrap';
import "./EmployeeDataForm.css"
const EmployeeDataForm = ({toggle}) => {
    const [employee, setEmployee] = useState({
        staff_id: '',
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        department: '',
        position: '',
        salary: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({
            ...employee,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Make a POST request with Axios
        axios.post('http://localhost:8081/list/employee', employee)
            .then(response => {
                console.log('Employee data saved:', response.data);
                // Handle success (e.g., show a success message, clear form)
                setEmployee({
                    staff_id: '',
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone_number: '',
                    department: '',
                    position: '',
                    salary: ''
                });
                toggle();
            })
            .catch(error => {
                console.error('There was an error saving the employee data!', error);
                // Handle error (e.g., show an error message)
            });
    };

    return (
        <Form className= "employeeform" onSubmit={handleSubmit}>
            <FormGroup className='employeeFieldName'>
            <Label>
                Staff ID:
                </Label>
                <Input type="text" name="staff_id" value={employee.staff_id} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label>
                First Name:
                </Label>
                <Input type="text" name="first_name" value={employee.first_name} onChange={handleChange} required />
            </FormGroup >
            <FormGroup className='employeeFieldName'>
                <Label>
                Last Name:
                </Label>
                <Input type="text" name="last_name" value={employee.last_name} onChange={handleChange} required />
            </FormGroup>
            <FormGroup className='employeeFieldName'>
                <Label>
                Email:
                </Label>
                <Input type="email" name="email" value={employee.email} onChange={handleChange} required />
            </FormGroup>
            
        <FormGroup className='employeeFieldName'>
        <Label>
                Department:
                </Label>
                <Input type="text" name="department" value={employee.department} onChange={handleChange} required />
            </FormGroup>
            
            <FormGroup className='employeeFieldName'>
            <Label>
                Position:
                </Label>
                <Input type="text" name="position" value={employee.position} onChange={handleChange} required />

            </FormGroup>
        <FormGroup className='employeeFieldName'>
            <Label>
                Salary:
                </Label>
                <Input type="number" name="salary" value={employee.salary} onChange={handleChange} required />
            </FormGroup>
            
            <button type="submit">Save Employee</button>
        </Form>
    );
};

export default EmployeeDataForm;