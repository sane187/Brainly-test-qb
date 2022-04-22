import React from 'react'
import './login.css';
import  {Link }from "react-router-dom";


const Login = () => {
  return (
    <>
  <div className='d-flex flex-column align-items-center' style={{marginTop:"6vh"}}>
<div className='roh w-100'>
<div className='px-4'>


<div className="row">
    <div className="col-lg-4 col-md-4 col-12 lg-1">
      <div className='login-cont'>
 <div className='mb-4 login-head'>Log in</div>
 <div className='input-g'>
   <input type="text" style={{display:"block"}} placeholder="Enter username or email"/>
   <input type="password" placeholder='Enter password'/>
 </div>
 <div>
 <button className='btn login-btn'>
   Log in
 </button>
 <div className='mt-3'>I don't have an account, <Link to="/signup">join now</Link> </div>
 </div>
      </div>
    </div>
    <div className="col-lg-8 col-md-8 col-12 lg-2">
    <h1 className='login-banner'>Let's start sharing knowledge</h1>
    </div>
   
</div>

</div>
</div>
  </div>
    </>
  )
}

export default Login