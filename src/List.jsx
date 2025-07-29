import { useState, useEffect, useMemo, useRef, } from "react";
import { AgGridReact } from "ag-grid-react";


export default function List() {
  const [rowData, setRowData] = useState();

  // Apply settings across all columns
  const defaultColDef = useMemo(() => ({
    filter: true, // Enable filtering on all columns
  }));

  const rowSelection = useMemo(() => {
    return {
      mode: "multiRow",
    };
  }, []);

  const [gridApi, setGridApi] = useState(null);
  const savedColState = useRef();
  const gridRef = useRef();

  const [colDefs, setColDefs] = useState([
    { field: "mission" },
    { field: "company" },
    { field: "location" },
    { field: "date" },
    { field: "price" },
    { field: "successful" },
    { field: "rocket" },
  ]);

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/space-mission-data.json") // Fetch data from server
      .then((result) => result.json()) // Convert to JSON
      .then((rowData) => setRowData(rowData)); // Update state of `rowData`
  }, []);

  // col hiding
  // Function to set the Grid API after grid is initialized
  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  // Function to hide a column
  const hideColumn = (field) => {
    console.log(gridApi.getColumnState());
    if (gridApi) {
      // 
     
    }
  };

  // Function to show a column
  const showColumn = (field) => {
    if (gridApi) {
    ///
    }
  };

  //////
  const getRowHeight = (params) => (params.node.group ? 70 : 40);

  return (
    <div style={{ height: 500 }}>
      <button onClick={() => hideColumn("mission")}>
        Hide 'Mission Column
      </button>
      <button onClick={() => showColumn("mission")}>
        Show 'Mission' Column
      </button>
      <button onClick={() => hideColumn("model")}>Hide 'Model' Column</button>
      <button onClick={() => showColumn("model")}>Show 'Model' Column</button>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        rowSelection={rowSelection}
        getRowHeight={getRowHeight}
        onGridReady={onGridReady}
      />
    </div>
  );
}
