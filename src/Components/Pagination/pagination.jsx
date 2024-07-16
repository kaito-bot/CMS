import React, { useState} from 'react';
import './pagination.css';

const PaginationComponent = ({studentData}) => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [studentsPerPage] = useState(10); // Number of students per page
    const [pagesToShow] = useState(5); // Number of pagination buttons to show


    // Pagination logic
    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
    const currentStudents = studentData.slice(indexOfFirstStudent, indexOfLastStudent);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Determine which page numbers to display in pagination
    const lastPage = Math.ceil(studentData.length / studentsPerPage);
    const nextPages = [];
    for (let i = currentPage + 1; i <= Math.min(currentPage + pagesToShow, lastPage); i++) {
        nextPages.push(i);
    }

    console.log(studentData);

    return (
        <div className="student-table-container">
            <h1 className="student-table-title">Student List</h1>
            <table className="student-table">
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Major</th>
                        <th>Date of Birth</th>
                        <th>GPA</th>
                        <th>Graduation Year</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {currentStudents.map((student) => (
                        <tr key={student.studentId}>
                            <td>{student.studentId}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td>{student.major}</td>
                            <td>{student.date_of_birth}</td>
                            <td>{student.gpa}</td>
                            <td>{student.graduation_year}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Pagination buttons */}
            <div className='pagination-wrapper'>
            <div className="pagination">
                <button disabled={currentPage === 1} onClick={() => paginate(currentPage - 1)}>Previous</button>
                {nextPages.map((pageNumber) => (
                    <button key={pageNumber} onClick={() => paginate(pageNumber)}>
                        {pageNumber}
                    </button>
                ))}
                <button disabled={currentPage === lastPage} onClick={() => paginate(currentPage + 1)}>Next</button>
            </div>
            </div>
        </div>
    );
};

export default  PaginationComponent;