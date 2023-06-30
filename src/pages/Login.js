import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Swal = require("sweetalert2");

export default function Login() {
  const navigate = useNavigate();
  const [sendRecords, getRecords] = useState([]);

  const insertRecord = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const body = Object.fromEntries(formData.entries());
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/register`,
      body
    );

    Swal.fire({
      icon: "success",
      title: result.data.message,
      showConfirmButton: false,
      timer: 1500,
    });
    if (result.data.status) {
      navigate("/");
    }
  };

  // const deleteRecord=async(e)=>{

  //   e.preventDefault();
  //   const formData = new FormData(e.target)
  //   const seeData=Object.fromEntries(formData.entries());
  //   const result1= await axios.post (`${process.env.REACT_APP_BASE_URL}/delete`,seeData)
  // }

  return (
    <div className="main">
      <div className="container-fluid align-items-center">
        <section className="section1 row p-0 m-0">
          <div className="col-lg-12">
            <form className="form card" id="form" onSubmit={insertRecord}>
              <div className="form-group">
                <h1>Registration</h1>
                <div className="username p-4">
                  <label className="form__label" for="firstName">
                    First Name{" "}
                  </label>
                  <input
                    className="form__input"
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    name="username"
                  />
                </div>
                <div className="password p-4">
                  <label className="form__label" for="password">
                    Password{" "}
                  </label>
                  <input
                    className="form__input"
                    type="password"
                    id="password"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <div className="email p-4">
                  <label className="form__label" for="email">
                    Email{" "}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form__input"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div className="phoneNumber p-4">
                  <label className="form__label" for="phoneNumber">
                    Phone Number
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    placeholder="Phone Number"
                    name="number"
                  />
                </div>
              </div>
              <div>
                <div className="row lg-12">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <button type="submit" className="button">
                      Sign Up
                    </button>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <button
                      onClick={() => {
                        navigate("/");
                      }}
                      className="button"
                    >
                      Login
                    </button>
                  </div>
                </div>

                <div>
                  {/* <span>Time:${new Date().toLocaleTimeString()}</span> */}
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
