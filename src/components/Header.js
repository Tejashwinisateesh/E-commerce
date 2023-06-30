import React from 'react';
import FontAwesomeIcon from '@fortawesome/fontawesome-free';
import {changeserachValue} from '../store/features/counterSlice'
import { useDispatch ,useSelector} from 'react-redux';

function Header  () {

  const cart = useSelector((state)=>state.cart.cart)

   const dispatch=useDispatch()



  return (
    <div>

 <div className='container-fluid row p-4 m-0'>
    <div className='col-lg-3 col-md-6 col-sm-12'>
      { 
    <span className='title'>Dashboard</span>
      }

    </div>
    <div className='col-lg-7 col-md-6 col-sm-12'>
    <input className="searchbar" type="text" placeholder="Search.."  onChange={(e)=>{ dispatch(changeserachValue(e.target.value))}}/>
    </div>
    <div className='col-lg-2 col-md-6 col-sm-12'>
  <button className='button' style={{width:"150px"}}>cart  <span style={{margin:"2px",height:"100%",padding:"5px",backgroundColor:"white",color:"black",borderRadius:"25%"}}>{cart.length}</span></button>
    </div>
 </div>
    </div>
  )
}
export default Header;