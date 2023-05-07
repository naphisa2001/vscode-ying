import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

function WorkonRow() {
    const columns = [{
        dataField: 'id',
        text: 'Product ID',
        headerStyle: {
            backgroundColor: '#e6e6fa'
          }
      }, {
        dataField: 'name',
        text: 'Product Name',
        headerStyle: {
            backgroundColor: '#e6e6fa'
          }
      }, {
        dataField: 'price',
        text: 'Product Price',
        headerStyle: {
            backgroundColor: '#e6e6fa'
          }
      }];
      const hiddenRowKeys = [1, 3];

      const products =[
        {
            id: "0",
            name: "Subaru BRZ",
            price: "1920000",
          },
          {
            id: "1",
            name: "Audi A5 Coupe",
            price: "4300000",
          },
          {
            id: "2",
            name: "Audi TT",
            price: "4700000",
          },
          {
            id: "3",
            name: "BMW 8 Series Coupe",
            price: "12960000",
          },
          {
            id: "4",
            name: "BMW M8",
            price: "17960000",
          },
          {
            id: "5",
            name: "Mclaren 570S",
            price: "21800000",
          },
          {
            id: "6",
            name: "Rolls-Royce Wraith",
            price: "30900000",
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
    <h1 style={{marginLeft: "45%", marginBottom: "20px"}}>Hide Row</h1>

        <BootstrapTable 
        keyField="id" data={ products } 
        columns={ columns } 
        hiddenRows={ hiddenRowKeys } 
        />
        </div>
  );
}

export default WorkonRow;