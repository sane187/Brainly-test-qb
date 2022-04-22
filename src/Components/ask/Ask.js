import React from 'react';
import './ask.css';

const Ask = () => {
  return (
   <>
  <div className='d-flex flex-column align-items-center' style={{marginTop:"6vh"}}>
<div className='roh w-100'>
<div className='px-4'>


<div className="row">


    <div className="col-lg-8 col-md-8 col-12 lg-1">
      <div className='ask-cont'>
 <div className='mb-4 ms-1 ask-head'>Ask a question about your assignment</div>
 <div className='input-ask'> 
   <textarea  placeholder="Write your question here (Keep it simple and clear to get the best answer)"/>
 </div>

 <div>
 <div className="dropdown px-1 ask-dwn">
  <button className="btn dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Pick a subject
  </button>
  <ul className="dropdown-menu adm mt-2" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
</div>



 <div className='mt-4'>
 <button className='btn ask-btn'>
  Ask you question
 </button>
 </div>

      </div>
    </div>
      <div className="col-lg-4 col-md-4 col-12 lg-2">
    <h1 className='ask-banner'>MILLIONS OF QUESTIONS ALREADY ANSWERED.</h1>
    </div>


</div>
 </div>   
</div>
</div>

    </>
  )
}

export default Ask