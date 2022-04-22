import React, { useState } from 'react';
import "./header.css"
import { useEffect } from "react";
import brandmImg from '../../Assets/brainly-brand-mobile.svg'
import brandImg from '../../Assets/brainly-brand.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import  {Link }from "react-router-dom";





const Header = () => {
  window.addEventListener("scroll",function(){
    let nav=document.getElementById("navbar-top");
    let btn=document.getElementById("nav-btn");

    if(window.pageYOffset==0 && scroll){
     setScroll(false);
      nav.classList.remove("fixed-top","bg-white");
     btn.style.border="0px solid black";
     nav.classList.add("pt-lg-4",);
    
    }
    if(window.pageYOffset>4 && scroll===false){
      setScroll(true);
      nav.classList.add("fixed-top","bg-white",);
      nav.classList.remove("pt-lg-4");
     btn.style.border="2px solid black";    
     }

     
  })
  const [click,setClick]= useState(false);
  const [scroll,setScroll]= useState(false);

  

  const handleClick=()=>{
    setClick(!click)
  }

  return (
      <>
    <div >
<nav className="navbar navbar-expand-lg pt-lg-4" id="navbar-top" >
  <div className="container">
    <Link to="/" className="navbar-brand px-3" href="#">{scroll?<img alt="" src={brandImg} style={{width:"90px"}} className="logo"/>:<img alt="" src={brandImg} style={{width:"162px"}} className="logo"/>}<img alt="" src={brandmImg} style={{width:"40px"}} className="mobile-logo"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleClick}>
      <span className="navbar-toggler-icon d-inline-flex">{click?<GrClose fontSize={"40px"}/>:<GiHamburgerMenu fontSize={"40px"} />}</span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item">
          <Link to="/login" className="nav-link" aria-current="page" >LOG IN </Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link" >JOIN NOW</Link>
        </li>
        <li className="nav-item">
          <Link to="/askquestion" className="nav-link" id="nav-btn" href="#">ask QUESTION</Link>
        </li>
       
      </ul>
    
    
    </div>
  </div>
</nav>

    </div>
    </>
  )
}

export default Header