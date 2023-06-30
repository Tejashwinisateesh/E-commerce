import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Signin from "./pages/Signin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/Register" element={<Login />} />
          <Route path="/home/*" element={<Blog />} />
        </Routes>
      </BrowserRouter>
      {/* <div className='leftNavBar'>
<Home/>
        </div>
<div className='rightContent'>
<div className='topHeader'>
gdsfgdgdsg
</div>
<div className='mainContent'>
sfdsfgsdfgdfg
</div>

</div> */}
      {/* <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='Signin' element={<Signin/>}>Signin</Route>
        <Route path="/*" element={<Layout/>}>Layout</Route>
        <Route path='Contact' element={<Contact/>}>Contact</Route>
        <Route path='Blog' element={<Blog/>}>Blog</Route>
     
      </Routes> 
      </BrowserRouter> */}
    </div>
  );
}

export default App;
