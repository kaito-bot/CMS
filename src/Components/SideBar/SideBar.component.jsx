import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Student from "../Student/Student";
import Employee from "../Employee/Employee";
import "./SideBar.css";
import ModalComponent from '../StudentModal/ModalComponent';
import RecordCount from '../RecordCount/RecordCount';

function SideBar() {
    return (
        <div id="viewport">
            <div id="sidebar">
                <header>
                    <a href="#">My App</a>
                </header>
                <ul className="nav">
                    <li>
                        <Link to="studentdetails">
                            <i className="zmdi zmdi-view-dashboard"></i> Student
                        </Link>
                    </li>
                    <li>
                        <Link to="employeedetails">
                            <i className="zmdi zmdi-link"></i> Employee
                        </Link>
                    </li>

                    <li>
                        <ModalComponent/>

                    </li>
                </ul>
            </div>

            <div id="content">
                <div className="container-fluid">
                    
                    <Routes>
                        <Route path="/" element={<h1>Record Details</h1>} />
                        <Route path="studentdetails" element={<Student/>} />
                        <Route path="employeedetails" element={<Employee />} />
                    </Routes>
                    <RecordCount />
                </div>
            </div>
        </div>
    );
}

export default SideBar;

