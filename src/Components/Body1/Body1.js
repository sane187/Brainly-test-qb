import React from 'react'
import "./body1.css";
import physics from '../../Assets/ajj.png';
import mathss from '../../Assets/mathss.jpeg';
import mathsss from '../../Assets/mathsss.jpeg';
import math8 from '../../Assets/math8.jpeg';





const Body1 = () => {
  return (
    < >
        <div className='cont' style={{margin:"10vh 0"}} >
      <div className='body1-content d-flex flex-column align-items-center w-100' >

     
          <div style={{fontSize:"15px",backgroundColor: "#0089e3",padding:"3px 8px",color:"white",borderRadius:"6px",fontWeight:"700"}}>
              NEW ON BRAINLY
              </div>
          <h2 className='pt-4 pb-2 body-head'>Discover more with Textbook Solutions</h2>
          <div className='body-text'>Here you can find step by step solutions to the problems in your textbook, created by experts.</div> 


<div className='roh w-100'>
  <div className="row my-5">
  <div className="col-lg-3 col-md-4 col-6 px-lg-2 ">
    <div className='d-flex flex-column justify-content-start align-items-md-center conver-b-text'>
      
  <div className='body1-img-cont'><img className="img-responsive" src={physics} alt="p" /></div>
  <div className="b-txt"><div >500 Selected Problems In Physics for JEE Main &amp; Advanced</div></div>
   
     </div>
   </div>

    <div className="col-lg-3 col-md-4 col-6 px-lg-2">
    <div className='d-flex flex-column justify-content-start align-items-md-center conver-b-text'>
   
    <div className='body1-img-cont'><img src={math8} alt="" /></div>
  <div className="b-txt">
  <div >A Compact and Comprehensive Book of IIT Foundation Mathematics - Class 8</div>
    </div>
   
    </div>
    </div>



    <div className="col-lg-3 col-md-4 hide-small-body px-lg-2 ">
    <div className='d-flex flex-column justify-content-start align-items-md-center conver-b-text '>
   
    <div className='body1-img-cont'><img src={mathss} alt="" /></div>
  <div className="b-txt ">
  <div>NCERT Class 9 Mathematics</div>
     </div>
   
    </div>
    </div>

    <div className="col-lg-3 hide-body px-lg-2">
    <div className='d-flex flex-column justify-content-start align-items-md-center conver-b-text'>
   
    <div className='body1-img-cont'><img src={mathsss} alt="" /></div>
  <div className="b-txt">
  <div>NCERT Class 10 Mathematics</div>
     </div>
   
   </div>
  </div>
 </div>

</div>

        <a className="body-btn" href="#" role="button">find your book</a>
      
</div>
        </div>
    </>
  )
}

export default Body1