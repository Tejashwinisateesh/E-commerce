import React from 'react';
import '../components/Home.css'
import {Link} from 'react-router-dom'
export default function Home() {
  return (

<>
<div className='side'>
<div className='sideNav'><Link className='sideNavLink' to={'/home/Products'}>Home</Link></div>
 <div className='sideNav'> <Link className='sideNavLink' to={'/home/cart'}>Cart</Link></div>
 <div className='sideNav'> <Link className='sideNavLink' to={'/home/AddProducts'}>Add Products</Link></div>
</div>
</>
  )
}


