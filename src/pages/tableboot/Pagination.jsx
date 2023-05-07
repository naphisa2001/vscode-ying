import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

function Pagination() {
  const columns = [
    {
      dataField: "id",
      text: "Product ID",
      headerStyle: {
        backgroundColor: '#db7093'
      }
    },
    {
      dataField: "name",
      text: "Product Name",
      headerStyle: {
        backgroundColor: '#db7093'
      }
    },
    {
      dataField: "price",
      text: "Product Price",
      headerStyle: {
        backgroundColor: '#db7093'
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
      {
        id: "6",
        name: "Lamborghini Huracan",
        price: "19800000",
      },
      {
        id: "7",
        name: "Bugatti W16 Mistral 2023",
        price: "170000000",
      },
      {
        id: "8",
        name: "Rolls Royce Wraith 2023",
        price: "15969800",
      },
      {
        id: "9",
        name: "Bentley Flying Spur Hybrid 2023",
        price: "7303200",
      },
      {
        id: "10",
        name: "Porsche Taycan Art Car 2023",
        price: "6800000",
      },
      {
        id: "11",
        name: "Hennessey Venom F5 2023",
        price: "98600000",
      },
      {
        id: "12",
        name: "Koenigsegg Jesko 2023",
        price: "98600000",
      },
      {
        id: "13",
        name: "Lamborghini Countach 2023",
        price: "95200000",
      },
      {
        id: "14",
        name: "Hennessey Venom F5 2022",
        price: "95200000",
      },
      {
        id: "15",
        name: "Audi R8",
        price: "19000000",
      },
      {
        id: "16",
        name: "Mercedes-Benz CLA-Class",
        price: "5990000",
      },
      {
        id: "17",
        name: "BMW i8",
        price: "11800000",
      },
      {
        id: "18",
        name: "Porsche 718",
        price: "10500000",
      },
      {
        id: "19",
        name: "Subaru BRZ",
        price: "1920000",
      },
      {
        id: "20",
        name: "Audi A5 Coupe",
        price: "4300000",
      },
      {
        id: "21",
        name: "Audi TT",
        price: "4700000",
      },
      {
        id: "22",
        name: "BMW 8 Series Coupe",
        price: "12960000",
      },
      {
        id: "23",
        name: "BMW M8",
        price: "17960000",
      },
      {
        id: "24",
        name: "Mclaren 570S",
        price: "21800000",
      },
      {
        id: "25",
        name: "Rolls-Royce Wraith",
        price: "30900000",
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
      <h1 style={{ marginLeft: "40%", marginBottom: "20px" }}>
        Basic Pagination Table
      </h1>
      <BootstrapTable
        keyField="id"
        data={products}
        columns={columns}
        pagination={paginationFactory()}
      />
    </div>
  );
}

export default Pagination;
