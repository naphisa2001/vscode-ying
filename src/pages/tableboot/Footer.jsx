import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

function Footer() {
  const columns = [
    {
      dataField: "id",
      text: "Product ID",
      footer: "Footer 1"
    },
    {
      dataField: "name",
      text: "Product Name",
      footer: "Footer 2"
    },
    {
      dataField: "price",
      text: "Product Price",
      footer: "Footer 3"
    },
  ];

  const products = [
    {
      id: "0",
      name: "Audi R8",
      price: "19000000",
    },
    {
      id: "1",
      name: "Mercedes-Benz CLA-Class",
      price: "5990000",
    },
    {
      id: "2",
      name: "BMW i8",
      price: "11800000",
    },
    {
      id: "3",
      name: "Porsche 718",
      price: "10500000",
    },
    {
      id: "4",
      name: "Subaru BRZ",
      price: "1920000",
    },
    {
      id: "20",
      name: "Audi A5 Coupe",
      price: "4300000",
    },
    {
      id: "5",
      name: "Audi TT",
      price: "4700000",
    },
    {
      id: "6",
      name: "BMW 8 Series Coupe",
      price: "12960000",
    },
    {
      id: "7",
      name: "BMW M8",
      price: "17960000",
    },
    {
      id: "8",
      name: "Mclaren 570S",
      price: "21800000",
    },
    {
      id: "9",
      name: "Rolls-Royce Wraith",
      price: "30900000",
    },
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
       <h1 style={{marginLeft: "45%", marginBottom: "20px"}}>Simple Footer</h1>
      <BootstrapTable keyField="id" data={products} columns={columns} striped
        hover
        condensed />
    </div>
  );
}

export default Footer;
