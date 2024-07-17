import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecordCount = () => {
    const [studentCount, setStudentCount] = useState(0);
    const [employeeCount, setEmployeeCount] = useState(0);

    useEffect(() => {
        fetchStudentCount();
        fetchEmployeeCount();
    }, []);

    const fetchStudentCount = async () => {
        try {
            const response = await axios.get('http://localhost:8081/list/student/count');
            setStudentCount(response.data);
        } catch (error) {
            console.error('Failed to fetch student count', error);
        }
    };

    const fetchEmployeeCount = async () => {
        try {
            const response = await axios.get('http://localhost:8081/list/employee/count');
            setEmployeeCount(response.data);
        } catch (error) {
            console.error('Failed to fetch employee count', error);
        }
    };

    return (
        <div className="record-counts">
            <div className="count-item">
                <h3>Number of Students</h3>
                <p>{studentCount}</p>
            </div>
            <div className="count-item">
                <h3>Number of Employees</h3>
                <p>{employeeCount}</p>
            </div>
        </div>
    );
};

export default RecordCount;
