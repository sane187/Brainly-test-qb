import React from 'react';
import { MdVerified } from 'react-icons/md';
import './question.css';
import santosh from '../../Assets/santosh.jpg';
import rajeev from '../../Assets/rajeev.jpg';



const Question = () => {
  

function myFunction(){
let vj=document.querySelector("#scrrr").scrollTop;
let h1=document.querySelector("#headline1");
let h2=document.querySelector("#headline2");
let h3=document.querySelector("#headline3");

if(vj<250){
  h1.style.color="black"
  h2.style.color="rgb(195, 209, 221)"
  h3.style.color="rgb(195, 209, 221)"
}
if(vj>250 && vj<780){
  h2.style.color="black"
  h1.style.color="rgb(195, 209, 221)"
  h3.style.color="rgb(195, 209, 221)"

}
if(vj>780){
  h3.style.color="black"
  h1.style.color="rgb(195, 209, 221)"
  h2.style.color="rgb(195, 209, 221)"
}
  
console.log(vj)
}



  return (
    <div className='d-flex flex-column align-items-center px-lg-5'>
      <div className='roh w-100 px-lg-4'>  
      

      <div  className='header w-100 d-flex flex-column align-items-center'>
         <div className='d-flex justify-content-center'>
    <MdVerified className="question-verify-icon" style={{color:"#24a865"}}/>
    </div>
    <h2 className='question-heading'>Tap into the brainpower of thousands of experts worldwide </h2>
    </div>


<div className='scroll-cont w-100' style={{marginTop:"12vh"}} id="scrrr" onScroll={myFunction}>
  <div className='d-flex flex-wrap justify-content-between align-items-start w-100 scroll-out' >
  <div className='stickyyy position-sticky'>
 <ol>
   <li><h3 className="step_headline" id="headline1">Ask questions</h3></li>
   <li><h3 className="step_headline" id="headline2" style={{color:"#c3d1dd"}}>Get help</h3></li>
   <li><h3 className="step_headline" id="headline3" style={{color:"#c3d1dd"}}>Go beyond</h3></li>
   </ol>

 <div ><p className='q-text mt-4' style={{opacity:"1"}}>Whether you’re stuck on a history question or a blocked by a geometry puzzle, there’s no question too tricky for Brainly.</p>

  </div>
  </div>
  


  <div className='overflow-question-cont'>


<div className='d-flex flex-column align-items-center mb-5'>

<div className='d-flex align-items-center mb-3'>
  <div className='q-image-cont'><img src={santosh} alt="santosh" style={{width:"100%",height:"100%"}}/></div>   
  <span className='ms-3'>Santoshkashyap70707</span>
</div>
<div className='question-cont'>
  <div>Mathematics &nbsp; &nbsp; &#9733; &nbsp; &nbsp; 5 points</div>
   <div className='mt-3'>What is multiplicative inverse of 1/16 ÷ 1/81 +-1/8​? </div>
</div>
</div>


<div className='d-flex flex-column align-items-center mb-5 answer' >
<div className='d-flex align-items-center mb-3'>
  <div className='q-image-cont'><img src={rajeev} alt="santosh" style={{width:"100%",height:"100%"}}/></div>   
  <span className='ms-3'>Rajeev70707</span>
</div>
<div className='question-cont'>
<div className='verify-img-cont'>
<MdVerified />
</div>
   <div className='mt-3'>
     <p><strong>Given :&nbsp;</strong>&nbsp;1/16 ÷ 1/81 + 1/8</p>
     <p><strong>To find:&nbsp;</strong>&nbsp; multiplicative inverse</p>
     <p><strong>Solution:</strong></p>
     <p></p>
     <p>a multiplicative inverse &nbsp;is basically a reciprocal</p>
     <p>Multiplicative inverse of number &nbsp;is the number which if multiplied by original number result in 1</p>
     <p>1/16 ÷ 1/81 + 1/8</p>
     <p>1/16 ÷ 1/81 = 81/16</p>
     <p>+ - 1/8 = - 1/8</p>
     <p>81/16 - 1/8</p>
     <p>= 81/16 - 2/16</p>
     <p>= (81 - 2)/16</p>
     <p>= 79/16</p>
     <p><strong>Multiplicative inverse = 16/79</strong></p>
</div>
</div>
</div>

<div className='d-flex flex-column align-items-center mb-5'>
<div className='d-flex align-items-center mb-3'>
  <div className='q-image-cont'><img src={santosh} alt="santosh" style={{width:"100%",height:"100%"}}/></div>   
  <span className='ms-3'>Santoshkashyap70707</span>
</div>
<div className='question-cont'>
  <div>Biology &nbsp; &nbsp; &#9733; &nbsp; &nbsp; 5 points</div>
   <div className='mt-3'>
Please explain to me the basic difference between Darwinism and Neo -Darwinism. It gets me totally confused. Thank you!
</div>
<button type="button" className='btn btn-dark mt-4'>START HELPING OTHERS</button>
</div>

</div>



  </div>




</div>
</div>
      </div>
    </div>
  )
}

export default Question;