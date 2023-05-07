import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

function Remote() {
  const columns = [
    {
      dataField: "id",
      text: "Product ID",
    },
    {
      dataField: "name",
      text: "Product Name",
      filter: textFilter(),
    },
    {
      dataField: "price",
      text: "Product Price",
      filter: textFilter(),
    },
  ];

  const RemoteSort = (props) => (
    <div>
      <BootstrapTable
        remote={{ sort: true }}
        keyField="id"
        data={props.data}
        columns={columns}
        onTableChange={props.onTableChange}
      />
      <Code>{sourceCode}</Code>
    </div>
  );
  class Container extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: products,
      };
    }

    handleTableChange = (type, { sortField, sortOrder, data }) => {
      setTimeout(() => {
        let result;
        if (sortOrder === "asc") {
          result = data.sort((a, b) => {
            if (a[sortField] > b[sortField]) {
              return 1;
            } else if (b[sortField] > a[sortField]) {
              return -1;
            }
            return 0;
          });
        } else {
          result = data.sort((a, b) => {
            if (a[sortField] > b[sortField]) {
              return -1;
            } else if (b[sortField] > a[sortField]) {
              return 1;
            }
            return 0;
          });
        }
        this.setState(() => ({
          data: result,
        }));
      }, 2000);
    };
  
    render() {
      return (
        <RemoteSort
          data={this.state.data}
          onTableChange={this.handleTableChange}
        />
      );
    }
  }  
}

export default Remote;
