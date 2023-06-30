import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Layout = () => {
  return (
    <>
      <div className="sidenav">
        <a className="logo" href="">
          Dashboard
        </a>
        <a className="logo"> Inventory</a>
        <a className="logo">Orders</a>
        <a className="logo">Earnings</a>
        <a className="logo">Sellers</a>
        <a className="logo">Customers</a>
        <a className="logo">Report</a>
        <a className="logo">Settings</a>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
