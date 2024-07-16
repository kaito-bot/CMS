// import Employee from "../Employee/Employee";
// import "./SideBar.css"
// import Student from "../Student/Student";
// function SideBar() {
//     return (  
//     <div id="viewport">
 
//         <div id="sidebar">
//           <header>
//             <a href="#">My App</a>
//           </header>
//           <ul className="nav">
//             <li>
//               <a href="#">
//                 <i className="zmdi zmdi-view-dashboard"></i> Dashboard
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i className="zmdi zmdi-link"></i> Shortcuts
//               </a>
//             </li>

//           </ul>
//         </div>
       
//         <div id="content">
//           <nav className="navbar navbar-default">
//             <div className="container-fluid">
//               {/* <ul className="nav navbar-nav navbar-right">
//                 <li>
//                   <a href="#"><i class="zmdi zmdi-notifications text-danger"></i>
//                   </a>
//                 </li>
//                 <li><a href="#">Test User</a></li>
//               </ul> */}
//             </div>
//           </nav>
//           <div className="container-fluid">
//             <Student/>
//             <Employee/>
//           </div>
//         </div>
//       </div> );
// }

// export default SideBar;

import React from 'react';
import { Routes, Route, Link, useMatch } from 'react-router-dom';
import PaginationComponent from "../Pagination/pagination";
import Student from "../Student/Student";
import Employee from "../Employee/Employee";
import "./SideBar.css";

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
