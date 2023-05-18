import logo from "./logo.svg";
import "./App.css";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

function App() {
  const gridRef = useRef();
  const [rowData, setRowData] = useState([
    { make: "Ford", model: "focus", price: 40000 },
    { make: "Toyota", model: "Calca", price: 30000 },
    { make: "BMW", model: "4 series", price: 50000 },
    { make: "Ford", model: "focus", price: 40000 },
    { make: "Toyota", model: "Calca", price: 30000 },
    { make: "BMW", model: "4 series", price: 50000 },
    { make: "Ford", model: "focus", price: 40000 },
    { make: "Toyota", model: "Calca", price: 30000 },
    { make: "BMW", model: "4 series", price: 50000 },
    { make: "Ford", model: "focus", price: 40000 },
    { make: "Toyota", model: "Calca", price: 30000 },
    { make: "BMW", model: "4 series", price: 50000 },
    { make: "Ford", model: "focus", price: 40000 },
    { make: "Toyota", model: "Calca", price: 30000 },
    { make: "BMW", model: "4 series", price: 50000 },
    { make: "Ford", model: "focus", price: 40000 },
    { make: "Toyota", model: "Calca", price: 30000 },
    { make: "BMW", model: "4 series", price: 50000 },
    { make: "Ford", model: "focus", price: 40000 },
    { make: "Toyota", model: "Calca", price: 30000 },
    { make: "BMW", model: "4 series", price: 50000 },
    { make: "Ford", model: "focus", price: 40000 },
    { make: "Toyota", model: "Calca", price: 30000 },
    { make: "BMW", model: "4 series", price: 50000 },
    { make: "Ford", model: "focus", price: 40000 },
    { make: "Toyota", model: "Calca", price: 30000 },
    { make: "BMW", model: "4 series", price: 50000 },
    { make: "Ford", model: "focus", price: 40000 },
    { make: "Toyota", model: "Calca", price: 30000 },
    { make: "BMW", model: "4 series", price: 50000 },
    { make: "Ford", model: "focus", price: 40000 },
    { make: "Toyota", model: "Calca", price: 30000 },
    { make: "BMW", model: "4 series", price: 50000 },
    { make: "Ford", model: "focus", price: 40000 },
    { make: "Toyota", model: "Calca", price: 30000 },
    { make: "BMW", model: "4 series", price: 50000 },
  ]);

  const [columDefs, setColumnDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ]);

  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
  }));

  const cellClickedListener = useCallback((e) => {
    console.log("cellClicked", e);
  });

  // useEffect(() => {
  //   fetch("https://www.ag-grid.com/example-assets/rowdata.js")
  //     .then((result) => result.json())
  //     .then((rowData) => setRowData(rowData));
  // });

  const pushMeClicked = useCallback((e) => {
    gridRef.current.api.deselectAll();
  });

  return (
    <div className="ag-theme-alpine" style={{ height: 500 }}>
      <button onClick={pushMeClicked}>Push Me</button>
      <AgGridReact
        ref={gridRef}
        onCellClicked={cellClickedListener}
        rowData={rowData}
        columnDefs={columDefs}
        defaultColDef={defaultColDef}
        rowSelection="multiple"
        animateRow={true}
      />
    </div>
  );
}

export default App;
