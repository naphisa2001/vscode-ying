import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

function WordonColumns() {
  const columns = [
    {
      dataField: "id",
      text: "User ID",
  headerStyle: {
    backgroundColor: '#c8e6c9'
  }
    },
    {
      dataField: "name",
      text: "User Name",
      headerStyle: {
        backgroundColor: '#c8e6c9'
      }
    },
    {
      dataField: "phone",
      text: "Phone",
      headerStyle: {
        backgroundColor: '#c8e6c9'
      }
    },
    {
      dataField: "address.city",
      text: "City",
      headerStyle: {
        backgroundColor: '#c8e6c9'
      }
    },
    {
      dataField: "address.postCode",
      text: "PostCode",
      headerStyle: {
        backgroundColor: '#c8e6c9'
      }
    },
  ];

  const users = [
    {
      id: "0",
      name: "Jidaporn",
      phone: "0991581614",
      address: {
        postCode: "1234-12331",
        city: "Chicago",
      },
    },
    {
      id: "1",
      name: "Daratong",
      phone: "0882151685",
      address: {
        postCode: "1234-12332",
        city: "Chicago",
      },
    },
    {
      id: "2",
      name: "Pattamon",
      phone: "0855233021",
      address: {
        postCode: "1234-12333",
        city: "Chicago",
      },
    },
    {
      id: "3",
      name: "Kamonwon",
      phone: "0831541565",
      address: {
        postCode: "1234-12334",
        city: "Chicago",
      },
    },
    {
      id: "4",
      name: "Jonh",
      phone: "0921639999",
      address: {
        postCode: "1234-12335",
        city: "Chicago",
      },
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
       <h1 style={{marginLeft: "40%", marginBottom: "20px"}}>Display Nested Data</h1>
      <BootstrapTable keyField="id" data={users} columns={columns} />
    </div>
  );
}

export default WordonColumns;
