import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { removeProduct, increase, decrease } from "../store/features/cart";
import "./Cart.css";
import { useNavigate } from "react-router-dom";


const Swal = require("sweetalert2");

function Cart({}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const subTotal = cart.reduce((total, item) => total + item.price, 0);
  const tax = 0.05;
  const totalTax = tax.toFixed(3);
  const roundedTax= parseFloat(totalTax)
  const total = subTotal * (1 + tax);
  const itemCount = cart.length;
  const grandSubTotal = subTotal.toFixed(2);
  const grandTotal = total.toFixed(3);
  const grandTax =grandSubTotal * roundedTax;
  const roundedOff = grandTax.toFixed(3)
  const handleClickConfirm = () => {
    Swal.fire({
      title: 'Checkout Successfull',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  };


  return (
    <>
      <div className="container-fluid h-100">
        <div className="cartbody">
          <div className="left">
            <div className="header">
              <h1 style={{ color: "#227D91", overflow: "static" }}>Cart</h1>
            </div>

            {cart.map((item) => {
              return (
                <div className="cartcard">
                  <div className="row m-0 p-0 cardborder text-center">
                    <div className="col-lg-3 col-md-4 col-sm-6 justify-content-lg-start d-inline-flex">
                      <img
                        src={`data:image/jpeg;base64,${item.image}`}
                        alt="Mobile"
                        height="100%"
                      ></img>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 p-3 text-center">
                      <h5>{item.product_No}</h5>
                      <h5>{item.products}</h5>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 p-2 text-center">
                      <h5>{item.description}</h5>
                      <h5>{item.status}</h5>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 p-2 text-center">
                      <h5>₹{item.price}</h5>
                      {/* { cart.filter(item=>item.product_No==record.product_No).length>=1
 &&
  <div style={{display:'flex'}}>
  <button className='button' type='button' onClick={()=>{ dispatch(increase(record.product_No))}}>+</button>
   
  <p>{cart.filter(item=>item.product_No==record.product_No)[0].quantity}</p>
  
  
  <button className='button' type='button' onClick={()=>{ dispatch(decrease(record.product_No))}}   disabled={cart.filter(item=>item.product_No==record.product_No)[0].quantity==1 }>
    -</button>
  
  <button className='button' type='button' onClick={()=>{dispatch(removeProduct(record.product_No))}}>Remove</button>
  
  </div>
} */}

                      {/*     
  <button className='button' type='button' onClick={()=>{ }}>+</button>
  <p>{cart.filter(item=>item.product_No==item.product_No)[0].quantity}</p>
  <button className='button' type='button' onClick={()=>{}}   disabled={cart.filter(item=>item.product_No==item.product_No)[0].quantity==1 }> -</button>
  <button className='button' type='button' onClick={()=>{}}>Delete</button> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cartcardbody">
            <h3 style={{ textAlign: "center" }}>Delivery</h3>
            <div className="details">
              <div className="row d-flex justify-content-between">
                <div className="col-lg-5 col-md-6 col-sm-12 ">Items</div>
                <div className="col-lg-7 col-md-6 col-sm-12 header">:  {itemCount}</div>
              </div>
              <div className="row d-flex justify-content-between">
                <div className="col-lg-5 col-md-6 col-sm-12 "> Subtotal </div> 
                <div className="col-lg-7 col-md-6 col-sm-12 header">:  ₹ {grandSubTotal}</div>
              </div>
              <div className="row d-flex justify-content-between">
                <div className="col-lg-5 col-md-6 col-sm-12 ">Tax (5%) </div>
                  <div className="col-lg-7 col-md-6 col-sm-12 header">:  ₹ {roundedOff} </div>
              </div>
              <hr></hr>
              <div className="row d-flex justify-content-between">
                <div className="col-lg-5 col-md-6 col-sm-12 ">Total</div> 
                <div className="col-lg-7 col-md-6 col-sm-12 header">:   ₹ {grandTotal}</div>
              </div>
            </div>
            <button
              className="submitButton"
             onClick={()=>{
              handleClickConfirm()
             }}
            >
              Proceed to checkout
            </button>
            <button
              className="submitButton"
              onClick={() => {
                navigate("/home/Products");
              }}
            >
              Continue shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
