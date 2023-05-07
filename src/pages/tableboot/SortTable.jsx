import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

function SortTable() {
  const columns = [{
    dataField: 'id',
    text: 'Product ID',
    sort: true,
    headerStyle: {
      backgroundColor: '#ffe4b5'
    }
  }, {
    dataField: 'name',
    text: 'Product Name',
    sort: true,
    headerStyle: {
      backgroundColor: '#ffe4b5'
    }
  }, {
    dataField: 'price',
    text: 'Product Price',
    headerStyle: {
      backgroundColor: '#ffe4b5'
    }
  }];

  const products = [
    {
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
    }, {
      id: "6",
      name: "Lamborghini Huracan",
      price: "19800000"
    }, {
      id: "7",
      name: "Rolls Royce Wraith 2023",
      price: "15969800"
    }, {
      id: "8",
      name: "Audi R8",
      price: "19000000"
    },
    {
      id: "9",
      name: "BMW i8",
      price: "11800000"
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
       <h1 style={{marginLeft: "45%", marginBottom: "20px"}}>Enable Sort</h1>
      <BootstrapTable
      keyField="id" 
      data={products} 
      columns={columns}
       />
    </div>
  );
}

export default SortTable;
