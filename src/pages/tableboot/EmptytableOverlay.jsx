import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

function EmptytableOverlay() {
  return <div></div>;
}

const columns = [
  {
    dataField: "id",
    text: "Product ID",
    headerStyle: {
      backgroundColor: "#48d1cc",
    },
  },
  {
    dataField: "name",
    text: "Product Name",
    headerStyle: {
      backgroundColor: "#48d1cc",
    },
  },
  {
    dataField: "price",
    text: "Product Price",
    headerStyle: {
      backgroundColor: "#48d1cc",
    },
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
];

const NoDataIndication = () => (
  <div className="spinner">
    <div className="rect1" />
    <div className="rect2" />
    <div className="rect3" />
    <div className="rect4" />
    <div className="rect5" />
  </div>
);

const Table = ({ data, page, sizePerPage, onTableChange, totalSize }) => (
  <div>
    <BootstrapTable
      remote
      keyField="id"
      data={data}
      columns={columns}
      pagination={paginationFactory({ page, sizePerPage, totalSize })}
      onTableChange={onTableChange}
      noDataIndication={() => <NoDataIndication />}
    />
    <Code>{sourceCode}</Code>
  </div>
);

class EmptyTableOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      data: products.slice(0, 10),
      sizePerPage: 10,
    };
  }

  handleTableChange = (type, { page, sizePerPage }) => {
    const currentIndex = (page - 1) * sizePerPage;
    setTimeout(() => {
      this.setState(() => ({
        page,
        data: products.slice(currentIndex, currentIndex + sizePerPage),
        sizePerPage,
      }));
    }, 3000);
    this.setState(() => ({ data: [] }));
  };

  render() {
    const { data, sizePerPage, page } = this.state;
    return (
      <Table
        data={data}
        page={page}
        sizePerPage={sizePerPage}
        totalSize={products.length}
        onTableChange={this.handleTableChange}
      />
    );
  }
}

export default EmptytableOverlay;
