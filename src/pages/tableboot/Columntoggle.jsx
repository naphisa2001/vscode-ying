import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { ColumnToggle } from "react-bootstrap-table2-toolkit";

function Columntoggle() {
  const { ToggleList } = ColumnToggle;
  const columns = [
    {
      dataField: "id",
      text: "Product ID",
      headerStyle: {
        backgroundColor: '#48d1cc'
      }
    },
    {
      dataField: "name",
      text: "Product Name",
      headerStyle: {
        backgroundColor: '#48d1cc'
      }
    },
    {
      dataField: "price",
      text: "Product Price",
      headerStyle: {
        backgroundColor: '#48d1cc'
      }
    }];

  const products = [
    {
        id: "0",
        name: "McLaren 720S",
        price: "26500000",
      },
      {
        id: "1",
        name: "Lamborghini Aventador",
        price: "37950000",
      },
      {
        id: "2",
        name: "GTR R35",
        price: "10700000",
      },
      {
        id: "3",
        name: "Ferrari F8 Tributo",
        price: "29500000",
      },
      {
        id: "4",
        name: "Mustang",
        price: "3799000",
      },
      {
        id: "5",
        name: "Porsche 911",
        price: "10990000",
      },
      {
        id: "6",
        name: "Lamborghini Huracan",
        price: "19800000",
      },
      {
        id: "7",
        name: "Bugatti W16 Mistral 2023",
        price: "170000000",
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
     <h1 style={{marginLeft: "45%", marginBottom: "20px"}}>Basic Column Toggle</h1>
      <ToolkitProvider
        keyField="id"
        data={products}
        columns={columns}
        columnToggle
      >
        {(props) => (
          <div>
            <ToggleList {...props.columnToggleProps} />
            <hr />
            <BootstrapTable {...props.baseProps} />
          </div>
        )}
      </ToolkitProvider>
    </div>
  );
}

export default Columntoggle;
