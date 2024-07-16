import {useEffect, useState} from 'react';
import { getStudentData } from '../../services/ApiService';
import DataList from '../DataList/DataList.component';
import PaginationComponent from '../Pagination/pagination';

function Student() {

    const [studentData, setStudentDatas] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{fetchStudentData()},[]);
    useEffect(() => {
        console.log("Updated studentData:", studentData);
    }, [studentData]);
    const fetchStudentData = async()=>{
        try {
            const data = await getStudentData();
            console.log("data",data);
            setStudentDatas(data);
           
            
        } catch (error) {
            console.error('Failed to fetch messages', error);
        }
        finally{
setLoading(false);
        }
    }

    if(loading){
        return <h1>Loading</h1>
    }
    return (
    
        <div>
        {/* <DataList studentData = {studentData}/> */}
        <PaginationComponent studentData = {studentData}/>
           
        </div>);
    
}

export default Student;