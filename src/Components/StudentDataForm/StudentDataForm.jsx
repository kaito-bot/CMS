import React, { useState } from 'react';
import axios from 'axios';
import { Form,FormGroup, Label,Input } from 'reactstrap';
import "./studentdataform.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StudentDataForm = () => {
    const [student, setStudent] = useState({
        studentId: '',
        firstName: '',
        lastName: '',
        email: '',
        major: '',
        date_of_birth: '',
        gpa: '',
        graduation_year: '',
        student_status: ''
    });

    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({
            ...student,
            [name]: value
        });
    };
    const notifySuccess = () => toast.success("Record Added Successfully !");
    const notifyFailure = ()  => toast.error("Couldn't save the record. Try again later") ;
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
       
        // Make a POST request with Axios
        axios.post('http://localhost:8081/list/student', student)
            .then(response => {
                console.log('Student data saved:', response.data);
                // Handle success (e.g., show a success message, clear form)
                setStudent({
                    studentId: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    major: '',
                    date_of_birth: '',
                    gpa: '',
                    graduation_year: '',
                    student_status: ''
                });
                notifySuccess();
               

            })
            .catch(error => {
                console.error('There was an error saving the student data!', error);
                notifyFailure();
                // Handle error (e.g., show an error message)
            });
    };

    return (
        <Form className= "studentform" onSubmit={handleSubmit}>
            <FormGroup className='fieldname'> 
                <Label>
                Student ID:
                </Label>
                <Input type="text" name="studentId" value={student.studentId} onChange={handleChange} required />
            
            </FormGroup>
           
            <FormGroup className='fieldname'>
                <Label>
                First Name:
                </Label>
                <Input type="text" name="firstName" value={student.firstName} onChange={handleChange} required />
            
            </FormGroup>

            <FormGroup className='fieldname'>
                <Label>
                Last Name:
                </Label>
                <Input type="text" name="lastName" value={student.lastName} onChange={handleChange} required />
           
            </FormGroup>
            <FormGroup className='fieldname'>
                <Label>
                Email:
                </Label>
                <Input type="email" name="email" value={student.email} onChange={handleChange} required />
            </FormGroup>
            
            <FormGroup className='fieldname'>
            <Label>
                Date of Birth:
                </Label>
                <Input type="date" name="date_of_birth" value={student.date_of_birth} onChange={handleChange} required />
            </FormGroup>
            <FormGroup className='fieldname'>
            <Label>
                Major:
             </Label>
                <Input type="text" name="major" value={student.major} onChange={handleChange} required />
         
            </FormGroup>
            <FormGroup className='fieldname'>
            <Label>
                GPA:
                </Label>
                <Input type="number" name="gpa" value={student.gpa} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>

                <FormGroup className='fieldname'>
                <Label>
                Graduation Year:
                </Label>
                <Input type="number" name="graduation_year" value={student.graduation_year} onChange={handleChange} required />
           </FormGroup>
            
            </FormGroup>
            
            <FormGroup className='fieldname'>
                <Label>
                Student Status:
                </Label>
                <Input type="text" name="student_status" value={student.student_status} onChange={handleChange} required />
            </FormGroup>
            
            <button type="submit">Save Student</button>
            <ToastContainer className="tcontainer" />
        </Form>
    );
};

export default StudentDataForm;