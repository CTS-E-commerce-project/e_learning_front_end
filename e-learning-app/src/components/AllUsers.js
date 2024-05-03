import React, { useEffect, useState } from 'react';
import "./css/Style.css";
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
export default function AllUsers() {

  const [rowData, setRowData] = useState([]);
  const [, setGridApi] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:9090/api/eLearning/v1/getAllUsers");
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
    { headerName: "NAME", field: "userName" },
    { headerName: "Email", field: "userEmail" },
    { headerName: "Phone Number", field: "phoneNumber" }
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
      {/* <div className="min-h-screen flex-col bg-bgDark2 "> */}
        {/* <div>
          <Nav title="Registered User" />
        </div> */}
        {/* <div className="bg-bgDark2"> */}
          <div
            className="ag-theme-quartz"
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
        {/* </div> */}
      {/* </div> */}
    </>
  )
}
