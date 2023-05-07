import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { CSVExport } from "react-bootstrap-table2-toolkit";

function ExportCSV() {
  const { ExportCSVButton } = CSVExport;
  const columns = [
    {
      dataField: "id",
      text: "Product ID",
      headerStyle: {
        backgroundColor: '#f5fffa'
      }
    },
    {
      dataField: "name",
      text: "Product Name",
      headerStyle: {
        backgroundColor: '#f5fffa'
      }
    },
    {
      dataField: "price",
      text: "Product Price",
      headerStyle: {
        backgroundColor: '#f5fffa'
      }
    },
  ];

  const products =[ {
    id: "0",
    name: "McLaren 720S",
    price: "26500000"
  },
  {
    id: "1",
    name: "Lamborghini Aventador",
    price: "37950000"
  },
  {
    id: "2",
    name: "GTR R35",
    price: "10700000"
  },
  {
    id: "3",
    name: "Ferrari F8 Tributo",
    price: "29500000"
  },
  {
    id: "4",
    name: "Mustang",
    price: "3799000"
  }, {
    id: "5",
    name: "Porsche 911",
    price: "10990000"
  }];

  return (
    <div
    style={{
      marginTop: "60px",
      marginLeft: "60px",
      marginRight: "60px",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
     <h1 style={{marginLeft: "45%", marginBottom: "20px"}}>Basic Export CSV</h1>
      <ToolkitProvider
        keyField="id"
        data={products}
        columns={columns}
        exportCSV
      >
        {(props) => (
          <div>
            <ExportCSVButton {...props.csvProps}>Export CSV!!</ExportCSVButton>
            <hr />
            <BootstrapTable {...props.baseProps} />
          </div>
        )}
      </ToolkitProvider>
    </div>
  );
}

export default ExportCSV;
