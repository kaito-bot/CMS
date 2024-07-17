import React, { useState} from 'react';
import './EmployeePagination.css';

const EmployeePaginationComponent = ({employeeData}) => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(10); // Number of students per page
    const [pagesToShow] = useState(5); // Number of pagination buttons to show


    // Pagination logic
    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = employeeData.slice(indexOfFirstEmployee, indexOfLastEmployee);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Determine which page numbers to display in pagination
    const lastPage = Math.ceil(employeeData.length / employeesPerPage);
    const nextPages = [];
    for (let i = currentPage + 1; i <= Math.min(currentPage + pagesToShow, lastPage); i++) {
        nextPages.push(i);
    }

    console.log(employeeData);

    return (
        
        <div className="employee-list-container">
            <h1 className="employee-table-title ">Employee List</h1>
            <table className="employee-table">
                <thead>
                    <tr>
                        <th>Staff ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>position</th>
                        <th>salary</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {currentEmployees.map((employee) => (
                        <tr key={employee.staff_id}>
                            <td>{employee.staff_id}</td>
                            <td>{employee.first_name}</td>
                            <td>{employee.last_name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.department}</td>
                            <td>{employee.position}</td>
                            <td>{employee.salary}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Pagination buttons */}
            <div className='employee-pagination-wrapper'> <div className="pagination">
                <button disabled={currentPage === 1} onClick={() => paginate(currentPage - 1)}>Previous</button>
                {nextPages.map((pageNumber) => (
                    <button key={pageNumber} onClick={() => paginate(pageNumber)}>
                        {pageNumber}
                    </button>
                ))}
                <button disabled={currentPage === lastPage} onClick={() => paginate(currentPage + 1)}>Next</button>
            </div>
            </div></div>
           
        
    );
};

export default  EmployeePaginationComponent;