import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

function CellEditing() {
  const columns = [
    {
      dataField: "id",
      text: "Product ID",
      headerStyle: {
        backgroundColor: '#fa8072'
      }
    },
    {
      dataField: "name",
      text: "Product Name",
      headerStyle: {
        backgroundColor: '#fa8072'
      }
    },
    {
      dataField: "price",
      text: "Product Price",
      headerStyle: {
        backgroundColor: '#fa8072'
      }
    },
  ];

  const products =[
    {
        id:  "0",
        name: "Audi R8",
        price: "19000000"
     },
     {
         id:  "1",
         name: "Lamborghini Huracan",
         price: "19800000"
      },
      {
         id:  "2",
         name: "Lamborghini Countach 2023",
         price: "95200000"
      },
      {
         id:  "3",
         name: "Hennessey Venom F5 2023",
         price: "98600000"
      },
      {
        id: "4",
        name: "Lamborghini Aventador",
        price: "37950000"
      },
      {
        id: "5",
        name: "GTR R35",
        price: "10700000"
      },
      {
        id: "6",
        name: "Ferrari F8 Tributo",
        price: "29500000"
      },
      {
        id: "7",
        name: "Mustang",
        price: "3799000"
      }, {
        id: "8",
        name: "Porsche 911",
        price: "10990000"
      }
    ];


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
     <h1 style={{marginLeft: "40%", marginBottom: "20px"}}>Click to Edit</h1>
      <BootstrapTable
        keyField="id"
        data={products}
        columns={columns}
        cellEdit={cellEditFactory({ mode: "click" })}
      />
    </div>
  );
}

export default CellEditing;
