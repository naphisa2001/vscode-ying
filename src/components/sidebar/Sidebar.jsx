import React, { useState } from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SiReacttable } from "react-icons/si";
import { FcAbout } from "react-icons/fc";
import { MdOutlineContentPaste } from "react-icons/md";
import "../../assets/css/SidebarAndNavbar.css";
import { IconContext } from 'react-icons';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Sidebar() {
  const [toggle, setToggle] = useState(false);
  const toggleFunction = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        
        <div className="main-sidebar">
          <div className="box-navbar">
              {/* Sidebar */}
            <Link to='#' className="menu-user">
              <FaIcons.FaBars onClick={toggleFunction} />
            </Link>
            <nav className={toggle ? "box-sidebar active" : "box-sidebar"}>
              <ul className='side-menu-items' onClick={toggleFunction}>
                <li className='sidebar-toggle'>
                  <Link to='#' className='menu-user'>
                    <AiIcons.AiOutlineClose />
                  </Link>
                </li><br />
                <NavLink className="textside" to="about">
                  <FcAbout />
                  <i>About </i>
                </NavLink><br /><br />
                <br /><NavLink className="textside" to="content">
                  <MdOutlineContentPaste />
                  <i>Content </i>
                </NavLink>
              </ul>
            </nav>

            {/* Navbar */}
            <nav>
              <h1 className="logo">
                React <i className="fab fa-react"></i>
              </h1>
            </nav>
            <NavLink className="a" to="home">
              <AiIcons.AiFillHome />
              <i>Home </i>
            </NavLink>

            {/* chart Navdropdown */}
           <NavDropdown className="a" title="Chart" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <NavLink className="reportlink" to="chart/bar" >
                  Bar
                </NavLink>
              </NavDropdown.Item >
            </NavDropdown>

           {/* tableboot Navdropdown */}
           <NavDropdown className="a" title="Table Bootstrap" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <NavLink className="tablebootlink" to="tableboot/basic" >
                  Basic Table
                </NavLink>
              </NavDropdown.Item >
              <NavDropdown.Item >
                <NavLink className="tablebootlink" to="tableboot/bootstrap4">
                Bootstrap4
                </NavLink>
              </NavDropdown.Item >
              <NavDropdown.Item >
                <NavLink className="tablebootlink" to="tableboot/workoncolumns">
                Work on Columns
                </NavLink>
              </NavDropdown.Item >
              <NavDropdown.Item >
                <NavLink className="tablebootlink" to="tableboot/workonheadercolumns">
                Work on Header Columns
                </NavLink>
              </NavDropdown.Item >
              <NavDropdown.Item >
                <NavLink className="tablebootlink" to="tableboot/columnfilter">
                Column Filter
                </NavLink>
              </NavDropdown.Item >
              <NavDropdown.Item >
                <NavLink className="tablebootlink" to="tableboot/workonrow">
                Work on Row
                </NavLink>
              </NavDropdown.Item >
              <NavDropdown.Item >
                <NavLink className="tablebootlink" to="tableboot/footer">
                Footer
                </NavLink>
              </NavDropdown.Item >
              <NavDropdown.Item >
                <NavLink className="tablebootlink" to="tableboot/sorttable">
                Sort Table
                </NavLink>
              </NavDropdown.Item >
              <NavDropdown.Item >
                <NavLink className="tablebootlink" to="tableboot/cellediting">
                Cell Editing
                </NavLink>
              </NavDropdown.Item >
              <NavDropdown.Item >
                <NavLink className="tablebootlink" to="tableboot/rowselection">
                Row Selection
                </NavLink>
              </NavDropdown.Item >
              <NavDropdown.Item >
                <NavLink className="tablebootlink" to="tableboot/rowexpand">
                Row Expand
                </NavLink>
              </NavDropdown.Item >
              <NavDropdown.Item >
                <NavLink className="tablebootlink" to="tableboot/pagination">
                Pagination
                </NavLink>
              </NavDropdown.Item >
              <NavDropdown.Item >
                <NavLink className="tablebootlink" to="tableboot/tablesearch">
                Table Search
                </NavLink>
              </NavDropdown.Item >
              <NavDropdown.Item >
                <NavLink className="tablebootlink" to="tableboot/columntoggle">
                Column Toggle
                </NavLink>
              </NavDropdown.Item >
              <NavDropdown.Item >
                <NavLink className="tablebootlink" to="tableboot/exportcsv">
                Export CSV
                </NavLink>
              </NavDropdown.Item >
              <NavDropdown.Item >
                <NavLink className="tablebootlink" to="tableboot/emptytableoverlay">
                Empty Table Overlay
                </NavLink>
              </NavDropdown.Item >
              <NavDropdown.Item >
                <NavLink className="tablebootlink" to="tableboot/remote">
                Remote
                </NavLink>
              </NavDropdown.Item >
              <NavDropdown.Item >
                <NavLink className="tablebootlink" to="tableboot/data">
                Data
                </NavLink>
              </NavDropdown.Item >
            </NavDropdown>
            <NavLink className="a" to="tablereact">
              <SiReacttable />
              <i>Table React </i>
            </NavLink>

             {/* student Navdropdown */}
             <NavDropdown className="a" title="Students" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <NavLink className="reportlink" to="student/Studentdata" >
                  Student Table
                </NavLink>
              </NavDropdown.Item >  
            </NavDropdown>
         
            {/* report Navdropdown */}
            <NavDropdown className="a" title="Report" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <NavLink className="reportlink" to="report/Report1" >
                  Report1
                </NavLink>
              </NavDropdown.Item >
              <NavDropdown.Item >
                <NavLink className="reportlink" to="report/Report2">
                  Report2
                </NavLink>
              </NavDropdown.Item >
            </NavDropdown>
            
          </div>
          <div className="main-content">
            <Outlet />
          </div>
        </div>
      </IconContext.Provider>
    </>
  );

}

export default Sidebar;
