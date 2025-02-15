import React from 'react';
import { Routes, Route, Link, useMatch } from 'react-router-dom';

import Student from "../Student/Student";
import Employee from "../Employee/Employee";
import "./SideBar.css";
import ModalComponent from '../StudentModal/ModalComponent';
import DashboardWelcome from '../DashboardWelcome/DashboardWelcome';

function SideBar() {
    

    return (
        <div id="viewport">
            <div id="sidebar">
                <header>
                    <a href="/">Dashboard</a>
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
    <div className='modalpadding'> <ModalComponent/></div>
                       
                    
                </ul>
            </div>

            <div id="content">
               
                <div className="container-fluid">
                    <Routes>
                        <Route path="/" element={<DashboardWelcome/>} />
                        <Route path="studentdetails" element={<Student/>} />
                        <Route path="employeedetails" element={<Employee />} />
                        
                      
                        
                    </Routes>
                    
                </div>
            </div>
        </div>
    );
}

export default SideBar;
