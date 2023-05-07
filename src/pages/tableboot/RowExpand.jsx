import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

function RowExpand() {
  const columns = [
    {
      dataField: "id",
      text: "Product ID",
      headerStyle: {
        backgroundColor: '#b0e0e6'
      }
    },
    {
      dataField: "name",
      text: "Product Name",
      headerStyle: {
        backgroundColor: '#b0e0e6'
      }
    },
    {
      dataField: "price",
      text: "Product Price",
      headerStyle: {
        backgroundColor: '#b0e0e6'
      }
    },
  ];

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
  ];

  const expandRow = {
    renderer: (row) => (
      <div>
        <p>{`This Expand row is belong to rowKey ${row.id}`}</p>
        <p>
          You can render anything here, also you can add additional data on
          every row object
        </p>
        <p>
          expandRow.renderer callback will pass the origin row object to you
        </p>
      </div>
    ),
  };

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
     <h1 style={{marginLeft: "42%", marginBottom: "20px"}}>Basic Row Expand</h1>
      <BootstrapTable
        keyField="id"
        data={products}
        columns={columns}
        expandRow={expandRow}
      />
    </div>
  );
}

export default RowExpand;
