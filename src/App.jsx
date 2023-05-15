import React from "react";
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./pages/auth/About";
import Content from "./pages/auth/Content";
import Report1 from "./pages/report/Report1";
import Report2 from "./pages/report/Report2";
import TableReact from "./pages/tablereact/TableReact";
import Basic from "./pages/tableboot/basic";
import Bar  from "./pages/chart/Bar";
import Bootstrap4 from "./pages/tableboot/Bootstrap4";
import WorkonColumns from "./pages/tableboot/WorkonColumns";
import WorkonHeadercolumns from "./pages/tableboot/WorkonHeadercolumns";
import ColumnFilter from "./pages/tableboot/ColumnFilter";
import WorkonRow from "./pages/tableboot/WorkonRow";
import Footer from "./pages/tableboot/Footer";
import SortTable from "./pages/tableboot/SortTable";
import CellEditing from "./pages/tableboot/CellEditing";
import RowSelelction from "./pages/tableboot/RowSelelction";
import RowExpand from "./pages/tableboot/RowExpand";
import Pagination from "./pages/tableboot/Pagination";
import TableSearch from "./pages/tableboot/TableSearch";
import Columntoggle from "./pages/tableboot/Columntoggle";
import ExportCSV from "./pages/tableboot/ExportCSV";
import EmptytableOverlay from "./pages/tableboot/EmptytableOverlay";
import Remote from "./pages/tableboot/Remote";
import Data from "./pages/tableboot/Data";
import TestRedux from "./testredux/TestRedux";
import Studentdata from "./student/Studentdata";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Navigate to="login" replace />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="testredux" element={<TestRedux />} />
        <Route path="main" element={<Sidebar />}>
          <Route index element={<Navigate to="home" replace/>} />
          <Route path="home" element={<Home />} />
          <Route path="chart/bar" element={<Bar />} />
          <Route path="tableboot/basic" element={<Basic />} />
          <Route path="tableboot/bootstrap4" element={<Bootstrap4 />} />
          <Route path="tableboot/workoncolumns" element={<WorkonColumns />} />
          <Route path="tableboot/workonheadercolumns" element={<WorkonHeadercolumns />} />
          <Route path="tableboot/columnfilter" element={<ColumnFilter />} />
          <Route path="tableboot/workonrow" element={<WorkonRow />} />
          <Route path="tableboot/footer" element={<Footer />} />
          <Route path="tableboot/sorttable" element={<SortTable />} />
          <Route path="tableboot/cellediting" element={<CellEditing />} />
          <Route path="tableboot/rowselection" element={<RowSelelction />} />
          <Route path="tableboot/rowexpand" element={<RowExpand />} />
          <Route path="tableboot/pagination" element={<Pagination />} />
          <Route path="tableboot/tablesearch" element={<TableSearch />} />
          <Route path="tableboot/columntoggle" element={<Columntoggle />} />
          <Route path="tableboot/exportcsv" element={<ExportCSV />} />
          <Route path="tableboot/emptytableoverlay" element={<EmptytableOverlay />} />
          <Route path="tableboot/remote" element={<Remote />} />
          <Route path="tableboot/data" element={<Data />} />
          <Route path="tablereact" element={<TableReact />} />
          <Route path="student/Studentdata" element={<Studentdata/>} />
          <Route path="about" element={<About />} />
          <Route path="content" element={<Content />} />
          <Route path="report/Report1" element={<Report1 />} />
          <Route path="report/Report2" element={<Report2 />} />
          </Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

