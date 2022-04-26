import React from 'react'
import './book.css';
import mathss from '../../Assets/mathss.jpeg';
import BookIcon from '../../Assets/book.svg';
import { IoIosArrowDown } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import {Link} from "react-router-dom"




const bookArr= ["1. Relations And Functions","2. Inverse Trigonometric Functions","3. Matrices","4. Determinants","5. Continuity And Differentiability","6. Applications of Derivatives"]
const arrNum= [1,2,3,4,5,6,7,8]

const Book = () => {
  return (
    <>
<div className='layout-wrapper'>
    
  <div className='d-flex flex-column align-items-center mt-5 px-lg-2 px-4'>
<div className='goh w-100'>
<div className='d-flex book-outer-text'>
<div className='d-flex flex-column'>
<div className='book-img-cont'>
  <img src={mathss} alt="" />
</div>

<div className='d-flex flex-column mt-3 '>
  <h5 className='book-name fw-bold mb-2'>Mathematics
Part I</h5>
  <div className='book-info-cont'>
<div>NCERT
</div>
<div>2019</div>
<div>ISBN: 8174506292</div>
  </div>
  
</div>
</div>

<div className='book-main-outer d-flex flex-column ms-4'>
<div className='d-flex flex-column'>
  <div className='book-desc-cont'>
    <h5 className='fw-bold mb-3'>Expert created answers for 12th Class Maths</h5>
    <div style={{color:"#46535f"}}> 
      <p className='mb-0 '>Class 12 Maths NCERT Solutions consists of two parts, i.e., parts 1 and 2. Brainly provides solutions for both the parts on their website. NCERT books are an ideal choice for the preparation of students as they cover all topics and provide a good source of information for each chapter.</p>
      <p >In addition, students preparing for exams require maximum information in minimum time. Brainly's textbook solutions are the best option for students as they contain important questions and are easy to understand. Students who find Maths confusing can start learning quickly from the basics with the help of this material. </p>

    </div>
  </div>

  <div className='accordion-chapter-cont mt-4'>
<div >
  {bookArr.map((item,index)=>(
    <div className="accordion arp accordion-flush" id="accordionFlushExample" key={item}>
  <div  className="accordion-item">
    <h2  className="accordion-header" id="flush-headingOne">
      <button  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
       <span className='d-flex align-items-center'> 
<div className='acc-book-icon'><img src={BookIcon} alt="book" /></div> <h6 className='mb-0 fw-bold ms-3'>{item}</h6>

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

<div style={{marginTop:"5vh" }} className="book-summary-outer">
<div className='d-flex flex-column'>
<div className='d-flex flex-column mb-5'>
  <h5 className='fw-bold mb-3'>Textbook Solutions for 12th Class Maths</h5>
  <div>The solutions are beneficial for exam preparation as they follow CBSE guidelines and are in line with the methodology of faculties. However, due to online classes and difficult access to specific books, it was challenging for students to find and prepare using the suitable material. Brainly has looked into this issue and offered for class 12 maths NCERT Solutions material for students to prepare. </div>

</div>
<div className='d-flex flex-column'>
<h5 className='fw-bold mb-3'>Class 12 Maths Summary</h5>
<div>
  <p>Brainly's Class 12 Maths NCERT solutions for parts 1 and 2 have the following advantages when compared to conventional methods:</p>
  <p>1. <strong>Easy to understand</strong> - Brainly provides simple solutions which are easier to understand and provide adequate information.  </p>
  <p>2. <strong>Latest Updates</strong> - Brainly's solutions are updated to the latest edition.</p>
  <p>3. <strong>Free of cost</strong> - The Class 12 Maths NCERT solutions that Brainly provides are free of charge for the betterment of students. </p>
  <p>Maths is a subject where basics play a vital role. Therefore, to understand the issue, students need to practice and familiarize themselves with the basics vigorously. Class 12 Maths NCERT solutions are helpful for students as they cover all the basics required for a good conceptual understanding. Therefore, as maths has its implementation in many other subjects, specific topics are very important. Furthermore, students should practice from these materials daily and strengthen their basics to score well in exams.  </p>

<p>Class 12 students must select their respective streams next year; they must prepare for many entrance exams. Maths carries a lot of weightage in such exams and is essential in every field. Therefore, the more students practice, the more are the chances to get selected into good colleges. Topics like Trigonometry, Matrices, Integration, and Differentiation are considered golden topics as they are vital for exams. 
</p>
<p>Brainly's material caters to the students who want good basic knowledge and gradually increase their level to the complex problems. This is why Class 12 Maths NCERT solutions are the best option for such students. NCERT materials are the choice of many faculties for teaching and setting up exam papers. They are also suggested by many teachers to be the best source for students to gain knowledge on CBSE subjects.</p>

</div>
</div>

</div>


</div>



</div>
</div>
</div>
  </div>
  </div>
</>  )
}

export default Book