import "./testimonial.css";
import { BsStarFill,BsStarHalf } from 'react-icons/bs';
import { BiCaretLeftCircle,BiCaretRightCircle } from 'react-icons/bi';
import React from 'react';
import katie from '../../Assets/katie.jpg';
import data from '../../Assets/data.jpg';



const Testimonial = () => {
  return (
    <div >
        <div className="w-100" style={{margin:"10vh 0",display:"flex",justifyContent:"center"}}>
<div className="roh">
<div className="d-flex flex-column align-items-center justify-content-start px-4">

<div>
    <h2 className="testimonial-head">Ruled by students, supported by parents</h2>
    </div>

<div className="d-flex flex-column align-items-center justify-content-start">
    
        <p className="testimonial-rating mb-0 mt-5">4.5</p>
    <div className="t-icon">
        <span style={{display:"inline-flex",color:"#ffcc33"}}> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarHalf /> </span>
    </div>
<p className="testimonial-text">review from Google Play</p>
</div>

<div className="d-flex align-items-center justify-content-between mt-4">
<div className="testi-btn-cont"><button > <BiCaretLeftCircle className="testi-btn-icon"/></button></div>
<div className="carrousel">
    <div className="w-100">
        <div className=" carousel-cont">
<div className="carousel-text">"This app is so much more than I expected. I was just needing help to figure out a math problem, <br />but I was surprised with what I found."</div>

        </div>
    </div>
</div>
<div className="testi-btn-cont"> <button><BiCaretRightCircle className="testi-btn-icon"/></button>
</div>
</div>


      <div className="mt-5"> 
   <div className="d-flex flex-column align-items-center ">
   <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
       <div className="me-4"><img className="user-img" src={data} alt="" /> </div> <div className="me-4"> <img className="user-img" src={data} alt="" /></div> 
        <div className="me-4"><img className="user-img-katie" src={katie} alt="" /></div>  <div className="me-4"><img className="user-img" src={data} alt="" /></div>  
        <div className="me-4"><img className="user-img" src={data} alt="" /></div>
   </div>
<div className="testimonial_username">Katie B</div>

   </div>

     </div>



    </div>


    </div>
</div>

    </div>
  )
}

export default Testimonial