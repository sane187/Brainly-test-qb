import React from 'react';
import './signup.css';
import  {Link }from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { BsFacebook,BsApple} from "react-icons/bs";


const Signup = () => {
  return (
    <>
     <div className='d-flex flex-column align-items-center' style={{marginTop:"6vh"}}>
<div className='roh w-100'>
<div className='px-4'>


<div className="row">
    <div className="col-lg-5 col-md-5 col-12 lg-1">
      <div className='login-cont'>
 <div className='mb-2 login-head'>Sign up</div>
 <div className='my-3'>Already have an account? <Link to="/login">Log in here</Link> </div>
 <div className='input-g'>
   <input type="text" style={{display:"block"}} placeholder="Enter username"/>
   <input type="text" style={{display:"block"}} placeholder="Enter email"/>
   <input type="password" placeholder='Enter password'/>
   <label htmlFor="date" className='mb-2'>Birthday</label>
  <input type="date" id="date" className='pe-2'/> 
 </div>
<div className='radio-div'>
  <div className='mb-2'>Level</div>
  <div className='d-flex align-items-center'> <input type="radio" id="junior" value="junior" className='me-1'/>
<label htmlFor="junior">Junior High</label></div>
<div className='d-flex align-items-center my-1'><input type="radio" id="senior" value="senior" className='me-1'/>
<label htmlFor="senior">Senior High</label></div>
<div className='d-flex align-items-center'><input type="radio" id="college" value="college" className='me-1'/>
<label htmlFor="college">College</label></div>
</div>
<div className='input-g mt-3'>
  <div className='mb-1'>Profile Picture</div>
<input type="file" id="myfile" name="myfile" />
</div>

 <div>
 <button className='btn login-btn'>
   Sign up
 </button>
 
 </div>
      </div>
    </div>
    <div className="col-lg-7 col-md-7 col-12 lg-2">
    <h1 className='signup-banner'>Join us and Let's start sharing knowledge</h1>
    
    <div className='google-cont w-100 mt-5' >
<h1 className='google-head'>Get verified answers to improve your grades</h1>
<div className='mb-4 mt-2'>Create an account now to get verified answers from our community of 350+ million teachers and students</div>
<div className='google-btn-group d-flex flex-column align-items-center'>
<button className='btn g-btn mb-3'>
 <FcGoogle className='me-2'/>Sign in with google 
 </button>
 <button className='btn g-btn mb-3'>
 <BsApple className='me-2'/>Sign in with apple 
 </button>
 <button className='btn g-btn mb-3'>
 <BsFacebook className='me-2'/>Sign in with facebook 
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

export default Signup