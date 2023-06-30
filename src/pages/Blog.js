import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// import {increment,decrement,incrementByAmount} from "../store/features/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Home from "../components/Home";
import Header from "../components/Header";
import Products from "../components/Products";
import Cart from "../components/Cart";
import Verify from "../components/Verify";
import "./Blog.css";

const Blog = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="App">
      <div className="leftNavBar">
        <Home />
      </div>
      <div className="rightContent">
        <div className="topHeader">
          <Header />
        </div>
        <div className="mainContent">
          {/* <Products/> */}
          <Routes>
            <Route path="/Products" element={<Products />} />
            <Route />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Verify" element={<Verify />} />
          </Routes>
          <div />
        </div>
      </div>
    </div>
  );
};

// <Home/>
{
  /* <div className="sidenav" >
<a className="logo" href="">Dashboard</a>
<a className="logo"> Inventory</a>
<a className="logo">Orders</a>
<a className="logo">Earnings</a>
<a className="logo">Sellers</a>
<a className="logo">Customers</a>
<a className="logo">Report</a>
<a className="logo">Settings</a>

</div>
<div className="container-fluid main1">
 <div className="header p-0 m-0 card1">
  <div className="d-flex">
  <h1 className="p-4">Dashboard</h1>
  <input className="searchbar" type="text" placeholder="Search.."/>
  </div>
 </div>
<div className="container-fluid">
<div className="row m-0 p-0">
{records.map((record)=>{
return <div className="col-lg-2 col-md-4 col-sm-6">
<div className="card">
<h1>{record.id}</h1>
</div>
</div>

})}
</div>
</div> */
}

{
  /* <div className="card"> */
}
{
  /* <table>
  <tr>
    <th>Sl.No</th>
    <th>Product No</th>
    <th>Products</th>
    <th>Quantity</th>
    <th>Description</th>
    <th>Status</th>
  </tr>
{records.map((record)=>{
  return <tbody>
  <tr>
<td>{record.id}</td>
<td>{record.product_No}</td>
<td>{record.products}</td>
<td>{record.quantity}</td>
<td>{record.description}</td>
<td>{record.status}</td>
  </tr>
</tbody>
})}
</table> */
}

{
  /* </div> */
}
{
  /* </div> */
}

export default Blog;

// {records.map((record)=>{
//   return <table>
//   <tr>
//     <th>Sl.No</th>
//     <th>Product No</th>
//     <th>Products</th>
//     <th>Quantity</th>
//     <th>Description</th>
//     <th>Status</th>
//   </tr>
//  <tbody>
//   <tr>
//  <td>{record.id}</td>
//  <td>{record.product_No}</td>
//  <td>{record.products}</td>
//  <td>{record.quantity}</td>
//  <td>{record.description}</td>
//  <td>{record.status}</td>
//   </tr>
//  </tbody>

//  </table>
//    }

//    )}
