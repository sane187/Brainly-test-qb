import React from 'react'
import './navbody.css';
import heroImg from '../../Assets/hero-ilustration.svg'
import { IoSearchCircleSharp } from 'react-icons/io5';
import Body1  from '../Body1/Body1'
import Testimonial  from '../testimonial/Testimonial';
import Question  from '../Question/Question';



const Navbody = () => {
  return (
    <>
    <div style={{background:"#d9f0ff",paddingTop:"2rem"}}>
    <div className="container-lg px-sm-4 outer">
    <div className="row pt-4 mx-3">
    <div className="col-lg-8 col-md-12 col-sm-12">
    <div className='nav-body-content'>
    <h1 className='nav-body-head'>
Go from questioning to understanding
</h1>
<div className='nav-body-text my-4'>
    Brainly is the knowledge-sharing community where 350 million students and experts put their heads together to crack their toughest homework questions.
</div>
<div className='pt-2'>
<div className="search-container d-flex align-items-center justify-content-between mb-5">
   <input type="text" className="search_input" placeholder="What is your question?" required="" maxLength="2048" /> 
   <span ><IoSearchCircleSharp className='search-icon' /></span>
   </div>
    </div>
    </div>

</div>

<div className="col-lg-4">
    <div className="imgg ">
      
        <img src={heroImg} alt='' className='imggg img-fluid' />
        
    </div>

  </div>


</div>

    </div>


</div>

<Body1 />
<Testimonial />
<Question />


    </>
  )
}

export default Navbody