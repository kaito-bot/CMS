function DataList({studentData}) {
    return ( <div className="DataList">
        {studentData.map((sdata)=>{
            return <div key={sdata.studentId} >
                {sdata.studentId }
                {sdata.firstName}
                {sdata.lastName}
                {sdata.email}
                </div>
        })}
    </div> );
}

export default DataList;