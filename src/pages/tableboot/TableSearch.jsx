import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

function TableSearch() {
  const { SearchBar } = Search;
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
    },
    {
      id: "5",
      name: "Porsche 911",
      price: "10990000"
    }];

  return (
    <div>
        <h1 style={{ marginLeft: "40%", marginBottom: "20px", marginTop: "45px" }}>Basic Search Table</h1>
      <ToolkitProvider keyField="id" data={products} columns={columns} search>
        {(props) => (
          <div>
            <h4>Input something at below input field:</h4>
            <SearchBar {...props.searchProps} />
            <hr />
            <BootstrapTable {...props.baseProps} />
          </div>
        )}
      </ToolkitProvider>
    </div>
  );
}

export default TableSearch;
