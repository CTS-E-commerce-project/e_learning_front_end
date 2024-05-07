import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./css/Style.css";
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import Nav from './Nav';
import { CiCirclePlus } from "react-icons/ci";

export default function ViewCourses() {
  const [rowData, setRowData] = useState([]);
  const [, setGridApi] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:9090/api/eLearning/v1/getAllCourses");
      const data = await response.data;
      console.log(response.data);
      setRowData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  const columnDefs = [
    { headerName: "Course ID", field: "id" },
    { headerName: "Course Title", field: "title" },
    { headerName: "Course Type", field: "courseType" },
    { headerName: "Amount", field: "amount" }
    // { headerName: "Address", field: "address" }
    // Add more column definitions as needed
  ];

  const defaultColDef = {
    filter: true, // Enable filtering by default
    sortable: true, // Enable sorting by default
    flex: 1,
    minWidth: 150,
  };


  return (
    <>
      <div className="min-h-screen flex-col bg-bgDark2 w-[1200px]">
        <div>
          <Nav title="Registered Courses" />
        </div>
        <div style={{marginLeft:'480px'}} title="Create course"><CiCirclePlus color="white" fontSize="1.5rem"/></div>
        <div className="bg-bgDark2">
          <div
            className="ag-theme-quartz-dark"
            style={{ height: "590px", width: "100%" }}
          >
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              pagination={true}
              paginationPageSize={10}
              defaultColDef={defaultColDef}
              onGridReady={onGridReady}
              quickFilterText={''} // Enable quick filter
            />
          </div>
        </div>
      </div>
    </>
  )
}
