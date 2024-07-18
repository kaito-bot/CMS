import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card,CardBody,CardTitle,CardText,CardSubtitle,Button } from 'reactstrap';
import './statistics.css'

function Statistics() {
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
    <div className='Statistics'>
        <div className='Stats-cards'>
        <Card>
      <CardBody>
        <CardTitle tag="h1">
          Students
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Until 2024
        </CardSubtitle>
        <CardText className='cardtext'>
           {studentCount}+
        </CardText>
        
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle tag="h1">
          Staff members
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Until 2024
        </CardSubtitle>
        <CardText className='cardtext'>
          {employeeCount}+
        </CardText>
        
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle tag="h1">
          Courses
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
         Until 2024
        </CardSubtitle>
        <CardText className='cardtext'>
          11+
        </CardText>
        
      </CardBody>
    </Card>
   </div></div>
     );
}

export default Statistics;