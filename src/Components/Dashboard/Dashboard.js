import React from 'react';
import './dashboard.css';
import { AiFillSetting, AiFillEye,AiFillCrown} from 'react-icons/ai';
import colors from '../../Assets/colors.svg';
import hindi from '../../Assets/hindi.svg';
import math from '../../Assets/math.svg';
import history from '../../Assets/history.svg';
import english from '../../Assets/english.svg';
import geography from '../../Assets/geography.svg';
import biology from '../../Assets/biology.svg';
import physics from '../../Assets/physics.svg';
import chemistry from '../../Assets/chemistry_1.svg';
import socialscience from '../../Assets/socialss.svg';
import environments from '../../Assets/environments.svg';
import computers from '../../Assets/computers.svg';
import indian from '../../Assets/Indianlang.svg';
import chinese from '../../Assets/chinese.svg';
import french from '../../Assets/french.svg';
import art from '../../Assets/art.svg';
import music from '../../Assets/music.svg';
import science from '../../Assets/science.svg';
import economy from '../../Assets/economy.svg';
import politicals from '../../Assets/politicals.svg';
import Sociology from '../../Assets/sociology.svg';
import business from '../../Assets/businessstudy.svg';
import brain from  '../../Assets/icon_brain_round.png';
import profile from  '../../Assets/faceimg.jpg';
import points from  '../../Assets/points.svg';
import profileB from  '../../Assets/profileblank.svg';
import { FaShieldAlt} from 'react-icons/fa';

let arr=[{"name":"All subjects","img":colors},
{"name":"Hindi","img":hindi},
{"name":"Math","img":math},
{"name":"History","img":history},
{"name":"English","img":english},
{"name":"Geography","img":geography},
{"name":"Biology","img":biology},
{"name":"Physics","img":physics},
{"name":"Chemistry","img":chemistry},
{"name":"Social Sciences","img":socialscience},
{"name":"Environment Sciences","img":environments},
{"name":"Computer Science","img":computers},
{"name":"India Languages","img":indian},
{"name":"Chinese","img":chinese},
{"name":"French","img":french},
{"name":"World Languages","img":hindi},
{"name":"Art","img":art},
{"name":"Music","img":music},
{"name":"Science","img":science},
{"name":"Economy","img":economy},
{"name":"Political Science","img":politicals},
{"name":"Sociology","img":Sociology},
{"name":"Business Studies","img":business},
]


const Dashboard = () => {
  return (
    <>
   
    <div className='d-flex flex-column align-items-center dash-main' style={{marginTop:"2vh"}}>
<div className='roh w-100'>
<div className='px-3'>
<div className="row mt-5 ">
    <div className="col-lg-2 dash-hide">
    <div className='d-flex justify-content-between align-items-center px-3'>
   <div className='fw-bold'>Subjects</div>
    <div className='setting'><AiFillSetting /></div>   

    </div>
<hr />
<div className='d-flex flex-column ps-4'>
{arr.map((item)=>(
  <div className='dash-icon-cont my-2' key={item.name}>
  <img src={item.img} alt="colors" style={{height:"28px"}}/>
   <div className='ms-3'>{item.name}</div>
  </div>)
)}

</div>
    </div>

    <div className="col-lg-7 col-md-12 col-12 ">
   <div className='dashboard-cont'>
  <div className='dash-header'>
    <div className='d-flex align-items-center'>
      <div className='dash-bimg-cont'><img src={brain} alt="brain" /></div>  
      <div className='ms-2 fw-bold' style={{color:"#323c45"}}>The Brain Answerer</div>
       </div>

      <div className='d-flex flex-column dash-head-outer' >
      <div><h1 className='dash-head py-3'>What do you need to know?</h1></div>
<div><button className='btn dash-btn'>
  Ask your quetion
 </button></div>
      </div>
      </div>


<div className='dash-q-answer-cont border-up'>
  
  <div className='d-flex dash-drop-div'>
  <div>
 <div className="dropdown me-3 ddm ask-dwn">
  <button className="btn dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  All levels
  </button>
  <ul className="dropdown-menu adm mt-2" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
</div>

<div>
 <div className="dropdown ddm ask-dwn">
  <button className="btn dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  All 
  </button>
  <ul className="dropdown-menu adm mt-2" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
</div>
  </div>

{arr.map((items)=>(

<div className='dash-q-answer mt-5'>
<div className='d-flex justify-content-between'>

<div className='d-flex align-items-center'>
      <div className='dash-bimg-cont'><img src={profile} alt="profile" /></div>  
      <div className='ms-2 q-time'>Math * 7 minutes ago</div>
       </div>

       <div className='d-flex align-items-center' style={{background:"#ebf2f7",borderRadius:"10px"}}>
      <div className='points-img-cont'><img src={points} alt="points" /></div>  
      <div className='mx-1'>+5 pts</div>
       </div>

       </div>
<div className='my-4 px-4'>Does kerosene react with Conc. H2SO4, Conc. HNO3, Conc. NaOH? does paraffin wax react with Conc.H2SO4, Conc. HNO3, Conc. NaOH?</div>

<div className='d-flex justify-content-between ps-4'>
<div className='d-flex align-items-center'>
<div className='me-2'><AiFillEye className="ai-eye" style={{color:"#687b8c"}}/></div>
      <div className='eye-img-cont'><img src={profile} alt="profile" /></div>  
       </div>

<div><button type="button" className="btn btn-answer">Answer</button></div>

</div>

</div>

))}

</div>
   </div>
    </div>


    <div className="col-lg-3 col-md-12 col-12 ">
    <div>
    <div className='dashboard-cont align-items-center pb-4'>
    <div className='d-flex align-items-center profile-cont justify-content-center mt-4'>
      <div className='profile-img-cont'><img src={profileB} alt="points" style={{height:"100%",width:"100%"}}/></div>  
      <div className='d-flex flex-column ms-3'>
        <div className='username fw-bold'>joshiarpit75</div>
        <div className='role mt-1'><div>Helping Hand</div></div>
        </div>
       </div>
    
       <div className='d-flex mt-3'>
       <div className='d-flex align-items-center' style={{background:"#ebf2f7",borderRadius:"10px"}}>
      <div className='points-img-cont'><img src={points} alt="points" /></div>  
      <div className='mx-1'>200 pts</div>
       </div>

       <div className='d-flex align-items-center ms-2' style={{background:"#ebf2f7",borderRadius:"10px"}}>
      <div className='points-img-cont'><img src={points} alt="points" /></div>  
      <div className='mx-1'>0 pts</div>
       </div>
       </div>

       <div className='d-flex mt-3'>
       <div className='d-flex align-items-center shield' style={{background:"#ebf2f7",borderRadius:"10px"}}>
      <div><FaShieldAlt /></div>  
      <div className='mx-1'>Ad Astra</div>
       </div>

       <div className='d-flex align-items-center ms-2 shield' style={{background:"#ebf2f7",borderRadius:"10px"}}>
      <div><FaShieldAlt /></div>  
      <div className='mx-1'>Brainly Space</div>
       </div>
       </div>



      </div>



<div className='dashboard-cont dom mt-3 '>
<div className='d-flex flex-column'>
<div className='d-flex align-items-center'>
      <div ><AiFillCrown className="ai-crown" style={{color:"#ffd700"}}/></div>  
      <div className='ms-2 q-time'>Brainliest users</div>
       </div>

       <div className="dropdown ask-dwn mt-3">
  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Daily ranking
  </button>
  <ul className="dropdown-menu adm mt-2" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>

<div className='d-flex justify-content-between align-items-center mt-3'>
<div className='d-flex align-items-center'>
      <div className='dash-bimg-cont'><img src={profile} alt="profile" /></div>  
      <div className='ms-2 q-time'>riya58735</div>
       </div>
    <div className='fw-bold'>795 points</div>   

    </div>

    
<div className='d-flex justify-content-between align-items-center mt-3'>
<div className='d-flex align-items-center'>
      <div className='dash-bimg-cont'><img src={profile} alt="profile" /></div>  
      <div className='ms-2 q-time'>riya58735</div>
       </div>
    <div className='fw-bold'>795 points</div>   

    </div>

    
<div className='d-flex justify-content-between align-items-center mt-3'>
<div className='d-flex align-items-center'>
      <div className='dash-bimg-cont'><img src={profile} alt="profile" /></div>  
      <div className='ms-2 q-time'>riya58735</div>
       </div>
    <div className='fw-bold'>795 points</div>   

    </div>
     
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

export default Dashboard