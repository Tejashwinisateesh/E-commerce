import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';
import { addToCart, removeProduct, increase,decrease} from '../store/features/cart';
import '../components/Products.css'
import {useDispatch} from 'react-redux';

function Products() {


  const serachValue = useSelector((state) => state.counter.serachValue)

  const cart = useSelector((state)=>state.cart.cart)

  const dispatch=useDispatch()

  // const quantity = useSelector((state) => state.product.quantity);


  const [open, setOpen] = React.useState(false);

    const header={ headers: {"Authorization" : `Bearer ${window.localStorage.getItem('jwtToken')}`} }
    const [records,setrecords]=useState([])

    const fetchRecords =async()=>{
        const {data}=await axios.get(`${process.env.REACT_APP_BASE_URL}/getAllProducts`,header)
        setrecords(data.data)
      }
    


      useEffect(()=>{
        fetchRecords()
      },[])
        
useEffect(()=>{
    console.log(records);
    },[records])
  return (
    <div>
<div className="container-fluid body">
<div className="row m-0 p-1">
{records.filter(item=>item.product_No.replace(/\s/g,"").includes(serachValue)).map((record)=>{
return <div className="col-lg-4 col-md-4 col-sm-6">
<div className="card">
{/* <h5>{record.id}</h5> */}
<img src={`data:image/jpeg;base64,${record.image}`} alt='Mobile'></img>
<h5>{record.product_No}</h5>
<h5>{record.products}</h5>
<h5>{record.description}</h5>
<h5>{record.status}</h5>
<h5>₹{record.price}</h5>
<div className='d-flex justify-content-center p-2'>
{
  
!cart.filter(item=>item.product_No==record.product_No).length


&& 
cart.filter(item=>item.product_No==record.product_No).length==0
&&
<button className='button' type='button' onClick={()=>{ dispatch(addToCart(record))}}>Add
</button>   
}
{ cart.filter(item=>item.product_No==record.product_No).length>=1
 &&
  <div style={{display:'flex'}}>
  <button className='button' type='button' onClick={()=>{ dispatch(increase(record.product_No))}}>+</button>
   
  <p>{cart.filter(item=>item.product_No==record.product_No)[0].quantity}</p>
  
  
  <button className='button' type='button' onClick={()=>{ dispatch(decrease(record.product_No))}}   disabled={cart.filter(item=>item.product_No==record.product_No)[0].quantity==1 }>
    -</button>
  
  <button className='button' type='button' onClick={()=>{dispatch(removeProduct(record.product_No))}}>Remove</button>
  
  </div>
}
</div>

</div>
</div>

})}
</div>

</div> 
    </div>
  )
}
export default Products;


