import React from 'react'
import './login.css';
import  {Link }from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook,BsApple} from "react-icons/bs";





const Login = () => {
  return (
    <>
  <div className='d-flex flex-column align-items-center' style={{marginTop:"6vh"}}>
<div className='roh w-100'>
<div className='px-4'>

<h1 className='login-banner text-cener'>Let's start sharing knowledge</h1>
<div className="row mt-5 px-5">
    <div className="col-lg-6 col-md-6 col-12 lg-1">
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
    <div className="col-lg-6 col-md-6 col-12 lg-2">
   
    <div className='google-cont w-100 ' >
<h1 className='google-head'>Get verified answers to improve your grades</h1>
<div className='mb-4 mt-2'>Create an account now to get verified answers from our community of 350+ million teachers and students</div>
<div className='google-btn-group d-flex flex-column align-items-center'>
<button className='btn g-btn mb-3'>
 <FcGoogle className='me-2'/>Log in with google 
 </button>
 <button className='btn g-btn mb-3'>
 <BsApple className='me-2'/>Log in with apple 
 </button>
 <button className='btn g-btn mb-3'>
 <BsFacebook className='me-2'/>Log in with facebook 
 </button>
</div>
<div className='mt-3'>I don't have an account, <Link to="/signup">join now</Link> </div>
</div>
    </div>
</div>

</div>
</div>
  </div>
    </>
  )
}

export default Login