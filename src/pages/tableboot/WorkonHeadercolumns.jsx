import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

function priceFormatter(column, colIndex, { sortElement, filterElement }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {filterElement}
      {column.text}
      {sortElement}
    </div>
  );
}

const columns = [
  {
   dataField: "id",
   text: "Product ID",
   sort: true,
   headerStyle: {
    backgroundColor: '#f0ffff'
  }
  },
  {
    dataField: "name",
    text: "Product Name",
    sort: true,
    headerStyle: {
      backgroundColor: '#f0ffff'
    }
   },
  {
    dataField: "price",
    text: "Product Price",
    sort: true,
    filter: textFilter(),
    headerFormatter: priceFormatter,
    headerStyle: {
      backgroundColor: '#f0ffff'
    }
  }];

const defaultSorted = [{
  dataField: 'name',
  order: 'desc'
}];

const products = [
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
     }];

function WorkonHeadercolumns() {
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
       <h1 style={{marginLeft: "30%", marginBottom: "20px"}}>Column Format with Filter and Sort</h1>
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={products}
          columns={columns}
          filter={filterFactory()}
          defaultSorted={defaultSorted}
        />
      </div>
    );
  }

export default WorkonHeadercolumns;
