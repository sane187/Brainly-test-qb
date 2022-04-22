import React from 'react';
import './footer.css'
import gplay from '../../Assets/gplay.svg';
import apple from '../../Assets/apple.svg'
import yt from '../../Assets/youtube.svg'




const Footer = () => {
  return (
    <>
    <div style={{margin:"10vh 0"}}>
    <div className='footer-upper-cont w-100' >
        <div className='roh px-4 w-100'>
            <div className='footer-upp-row w-100'>
            <div className='foot-content-cont'>
                <h3 className='footer-content'>
                What do you need to know?
                </h3>
                <h4 className='footer-content-sm'>
                Whether you’re stuck on a history question or a blocked by a geometry puzzle, there’s no question too tricky for Brainly.
                </h4>
                 </div>
            <button className='foot-btn'>Ask Question</button>
            </div>
            </div>
    </div>

  <div className='footer-below-cont d-flex justify-content-center w-100'>
   <div className='d-flex flex-column align-items-center justify-content-center px-4 roh w-100'>
      
<div className='d-flex flex-wrap justify-content-lg-between w-100'>
<div className='d-flex flex-column foot-one'> 
<div className='footer-head-text'>
WE'RE IN THE KNOW
</div>
<div className='my-4 d-flex align-items-center '>
 <span className='yt-icon-cont'><img className="yt-icon" src={yt} alt=""/></span>
</div>
<p className='footer-b-text'>
This site is using cookies under <a href="#" className="text-decoration-underline text-dark"> cookie policy </a>.
You can specify conditions of storing and accessing cookies in your browser
</p>
<div>

</div>
</div>
<div className='d-flex foot-two '>
  <section className='w-100'>
    <h3>Company</h3>
    <ul>     
      <li>About Us</li>
      <li>Blog</li>
      <li>Careers</li>
      <li>Advertise with us</li>
      <li>Term of Use</li>
      <li>Copyright Policy</li>
      <li>Privacy Policy</li>
      <li>Cookie Policy</li>
    </ul>
  </section>
  <section className='w-100'>
    <h3>Community</h3>
    <ul>     
    <li>Brainly Community</li>
      <li>Brainly for Schools &amp; Teachers</li>
      <li>Brainly for Parents</li>
      <li>Honor Code</li>
      <li>Community Guidlines</li>
      <li>Become a Volunteer</li>
      <li>Become a Volunteer</li>
    </ul>
  </section>
  <section className='w-100'>
    <h3>Help</h3>
    <ul>   
      <li>Signup</li>  
      <li>Help Center</li>  
      <li>Safety Center</li>  
      <li>Responsible Disclosure Agreement</li>  

    </ul>
  </section>
</div>
<div className='d-flex flex-column foot-three'>
<div>
  <h3 className='mb-0'>
    Get the Brainly App
  </h3>
</div>
<div className='d-flex my-4'>
  <a href="#" className='foot-img me-3' ><img src={gplay} alt="img alt" /></a> 
  <a href="#" className='foot-img'><img src={apple} alt="alt" /></a> 
</div>

<div className="dropdown px-1 foot-dwn">
  <button className="btn dropdown-toggle w-100" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Brainly.in
  </button>
  <ul className="dropdown-menu fdm mt-2" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>


</div> 

</div>

   </div>

  </div>
  </div>

    </>
  )
}

export default Footer