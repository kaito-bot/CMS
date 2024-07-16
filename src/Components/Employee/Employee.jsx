import {useEffect, useState} from 'react';
import { getEmployeeData } from '../../services/ApiService';

import EmployeePaginationComponent from '../employeePagination/EmployeePagination';

function Employee() {

    const [employeeData, setEmployeeData] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{fetchEmployeeData()},[]);
    useEffect(() => {
        console.log("Updated EmployeeData:", employeeData);
    }, [employeeData]);
    const fetchEmployeeData = async()=>{
        try {
            const data = await getEmployeeData();
            console.log("data",data);
            setEmployeeData(data);
           
            
        } catch (error) {
            console.error('Failed to fetch messages', error);
        }
        finally{
setLoading(false);
        }
    }

    if(loading){
        return <h1>Loading from </h1>
    }
    
    return(<div>
        {/* <DataList studentData = {studentData}/> */}
        <EmployeePaginationComponent employeeData = {employeeData}/>
           
        </div>);
        
    
}

export default Employee;