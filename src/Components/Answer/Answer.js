import React from 'react';
import './answer.css';
import mathss from '../../Assets/mathss.jpeg';
import { MdVerified } from 'react-icons/md';
import { IoIosArrowDown,IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import {Link} from "react-router-dom"
import vidoe from '../../Assets/videoaj.mp4';
import { FaRegThumbsDown,FaRegThumbsUp } from 'react-icons/fa';






const bookArr= ["1. Relations And Functions","2. Inverse Trigonometric Functions","3. Matrices","4. Determinants","5. Continuity And Differentiability","6. Applications of Derivatives"]
const arrNum= [1,2,3,4,5,6,7,8]

const social =[{name:"Here is a tip:",id:8},{name:"Step 1 of 5:",id:9},
{name:"Step 3 of 5:",id:10},{name:"Step 4 of 5:",id:11},{name:"Step 5 of 5:",id:12},{name:"Conclusion:", id:13},]

const Answer = () => {
  return (
    
    <div className='layout-wrapper'>
    
    <div className='d-flex flex-column align-items-center mt-5 px-lg-2 px-3'>
  <div className='roh w-100'>
  <div className='d-flex book-outer-text'>

  <div className='d-flex flex-column ans-book-outer'>
     <div className='ans-book-sec'>
      <div className='d-flex ans-book-sec-2'>
  <div className='answer-img-cont'><img src={mathss} alt="" /></div> 
    <h6 className="fw-bold ms-0 ms-lg-3 mb-1" style={{color:"#014a82"}}>Mathematics Part I</h6>
</div>
<div className='d-flex flex-column mt-3 '>
  <div className='ans-book-info-cont ms-lg-0 ms-3'>
<div>Author: NCERT</div>
<div>Class: 12</div>
<div>Edition: 2019</div>
<div>ISBN: 8174506292</div>
  </div>
  
</div>
</div>

<div>
<div className='ans-accordion-chapter-cont mt-2'>
  {bookArr.map((item,index)=>(
    <div className="accordion accordion-flush" id="accordionFlushExample" key={item}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button  className="accordion-button collapsed ans-acc-btn w-100" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
       <span className='d-flex '> 
 <h6 className='mb-0 fw-bold'>{item}</h6>

       </span>
      </button>
    </h2>
    <div id={`flush-collapse-${index}`}  className="accordion-collapse collapse " aria-labelledby={`flush-heading${index}`} data-bs-parent="#accordionFlushExample">
      <div  className="accordion-body">
  <div className='d-flex flex-column'>
   <div className='d-flex justify-content-between'>
     <div className='d-flex align-items-center book-acc-head'> <IoIosArrowDown />  <div className='ms-2'>Exercise {index+1}.1</div> 
     </div>
     <span>5</span>
   </div>
  </div>
  <div className='d-flex flex-column ps-4 mt-3'>
  <Link to="/answer">
{arrNum.map((items)=>(
  <div className='d-flex justify-content-between mb-3' key={items}>
     <div className='d-flex align-items-center book-acc-head'> 
     <BsDot style={{color:"blue"}}/>  <div className='ms-2 fw-bold'>Question {items}</div> 
     </div>
     <span>5</span>
   </div>
))}

   </Link>
  </div>

      </div>
    </div>
  </div>
</div>

  ))}

</div>
</div>

</div>
<div className='d-flex flex-column mt-lg-0 mt-3 ms-0 ms-lg-4 w-100'>
<div className='ans-main-outer d-flex flex-column w-100'>
    <div className='d-flex justify-content-between '>
        <div className='d-flex align-items-center' style={{color:"#24a865",fontSize:"15px"}}><span><MdVerified /></span>
        <div className='ms-2 fw-bold'>Solved by experts</div>
        </div>
        <div className='d-flex align-items-center next-ans-btn' ><div><IoIosArrowBack /></div> <div className='mx-4'>Next Question</div> 
       <div><IoIosArrowForward /></div></div>
    </div>
    <div className='mt-4'>
    <div style={{color:"#323c45"}}>Mathmatics Part I, 1. Relations And Functions</div>
    <h5 className='fw-bold mt-2'>Question 1, Page 5</h5>
    </div>
    <div className='mt-3'>
     <div className='ans-part-overflow '>
       <div className='d-flex'>
    <button className='btn btn-default'>Part (i)</button>
    <button className='btn btn-default'>Part (ii)</button>
    <button className='btn btn-default'>Part (iii)</button>
    <button className='btn btn-default'>Part (iv)</button>
    <button className='btn btn-default'>Part (v) of (a)</button>
    <button className='btn btn-default'>Part (v) of (b)</button>
    <button className='btn btn-default'>Part (v) of (c)</button>
    <button className='btn btn-default'>Part (v) of (d)</button>
    <button className='btn btn-default'>Part (v) of (e)</button>
    </div>
     </div>
     </div>
 </div>

 <div className='d-flex flex-column ans-explain-outer mt-4'>
<div className='d-flex justify-content-between'>
  <h5 className='fw-bold'>Part (i) Answer</h5>
    <div></div>
</div>
<div style={{fontSize:"16px",lineHeight:"26px"}}>
  <div>1. Determine whether each of the following relations are reflexive, symmetric and
transitive: </div>
<div style={{whiteSpace:"pre-wrap"}}>{`(i) Relation R in the set A = {1, 2, 3, ..., 13, 14} defined as
R = {(x, y) : 3x – y = 0}`}</div>
</div>

<div className='d-flex video-explain-cont mt-3' >
<div>
  <div className='video-cont'>
<video src={vidoe} controls style={{width:"100%",height:"100%", borderRadius:"8px"}}/>
</div>
</div>
<div className='d-flex flex-column ps-3'>
  <div className='fw-bold mb-2' style={{fontSize:"18px"}}>Step-by-step video explanation</div>
<div style={{fontSize:"15px"}}>Part (i), Exercise 1.1, Page 5, 1. Relations And Functions</div>
</div>


</div>

<div>
<h5 className='mt-4 fw-bold mb-5'>Step by step explanation</h5>
<div>
<div className='mt-2 '>
  {social.map((item,index)=>(
  <div className={`accordion mb-3 social-acc raam-${item.id}`} id="accordionExample2" key={item.id}>
  <div className="accordion-item">
    <h2 className="accordion-header mb-0" id={item.id}>
      <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${item.id}`} aria-expanded="false" 
      aria-controls={`${item.id}collapseOne`}>
      <span className='d-flex '> 
 <h6 className='mb-0 fw-bold'>{item.name}</h6>

       </span>
      </button>
    </h2>
    <div id={`flush-collapse-${item.id}`} className="accordion-collapse collapse show" aria-labelledby={item.id} data-bs-parent="#accordionExample2">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  

</div>

  ))}

</div>

</div>

</div>
<div className='d-flex justify-content-center react-answer mt-4'> 
<h5 className='fw-bold'>Did you find what you were looking for?
</h5> 
<FaRegThumbsDown /> 
<FaRegThumbsUp />
</div>
 </div>


</div>
   </div>
   </div>
   </div>
   </div>

  )
}

export default Answer