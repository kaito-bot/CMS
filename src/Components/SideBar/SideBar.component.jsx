import React from 'react';
import { Routes, Route, Link, useMatch } from 'react-router-dom';
import PaginationComponent from "../Pagination/pagination";
import Student from "../Student/Student";
import Employee from "../Employee/Employee";
import "./SideBar.css";
import Modal from '../StudentModal/StudentModal.component';
import StudentModalComponent from '../StudentModal/StudentModal.component';

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
                        <StudentModalComponent/>

                    </li>
                </ul>
            </div>

            <div id="content">
               
                <div className="container-fluid">
                    <Routes>
                        <Route path="/" element={<h1>Welcome to My App</h1>} />
                        <Route path="studentdetails" element={<Student/>} />
                        <Route path="employeedetails" element={<Employee />} />
                        
                      
                        
                    </Routes>
                    
                </div>
            </div>
        </div>
    );
}

export default SideBar;
