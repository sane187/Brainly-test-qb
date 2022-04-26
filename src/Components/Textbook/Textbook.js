import React from 'react';
import './textbook.css'
import { AiOutlineSearch } from "react-icons/ai";
import physics from '../../Assets/ajj.png';
import mathss from '../../Assets/mathss.jpeg';

const Textbook = () => {
  return (
    <>
<div className='layout-wrapper'>
    
  <div className='d-flex flex-column align-items-center mt-5 layout-outer-text'>
 
<h1 className='textbook-head'>Textbook Solutions</h1>
<h6 className='textbook-head-small'>Here you can find step by step solutions to the problems in your textbook, created by experts.</h6>



<div className='textbook-input-cont d-flex'> 

       
            <div className='d-inline-flex input-search-cont '>
                <input type="text" className='textbook-search' placeholder='Find a book'/>
                    <button className="btn">
                       <AiOutlineSearch />
                    </button>
                
            </div>
<div className='d-flex text-dom'>
            <div>
 <div className="dropdown text-dwn ms-3">
  <button className="btn dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  All boards
  </button>
  <ul className="dropdown-menu tdm mt-2 " aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
</div>
        

<div>
 <div className="dropdown text-dwn ms-3">
  <button className="btn dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  All classes
  </button>
  <ul className="dropdown-menu tdm mt-2 " aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
</div>


<div>
 <div className="dropdown text-dwn ms-3">
  <button className="btn dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  All subjects
  </button>
  <ul className="dropdown-menu tdm mt-2" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
</div>


<div>
 <div className="dropdown text-dwn ms-3">
  <button className="btn dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  All mediums
  </button>
  <ul className="dropdown-menu tdm mt-2" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
</div>
</div>
</div>
</div>

<div className='book-section mt-4' >
<div className='d-flex flex-column align-items-center '>
    <div className='goh w-100 px-lg-2 px-4 pb-4'>
   
<div className='d-flex justify-content-between opened-books mt-4'>
<div>Opened books</div>  <button>see all</button>
</div>

<div className='d-flex mt-4'>
<div className='text-book-cont me-4'>
<div className='d-flex flex-column align-items-center'>
<div className='textbook-img-cont'><img src={physics} alt="book" /></div>
  <div className="textbook-txt text-center">
  <div >500 Selected Problems In Physics for JEE Main & Advanced </div>
    </div>
</div>
</div>

<div className='text-book-cont'>
<div className='d-flex flex-column align-items-center'>
<div className='textbook-img-cont'><img src={mathss} alt="bbok" /></div>
  <div className="textbook-txt">
  <div >Mathmatics Part I</div>
    </div>
</div>
</div>







</div>



  </div>

    </div>



</div>




  </div>
    </>
  )
}

export default Textbook