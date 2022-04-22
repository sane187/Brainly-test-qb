import './App.css';
import  { Routes, Route, Link }from "react-router-dom";
import Header from './Components/Navigation/Header';
import Navbody from './Components/navbody/Navbody';
import Carousel from './Components/carousel/Carousel';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Ask from './Components/ask/Ask'


import Footer  from './Components/Footer/Footer';


function App() {

  // window.addEventListener("scroll",function(){
  // var docWidth = document.documentElement.offsetWidth;

  // [].forEach.call(
  //   document.querySelectorAll('*'),
  //   function(el) {
  //     if (el.offsetWidth > docWidth) {
  //       console.log(el);
  //     }
  //   }
  // )})
  

  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Navbody />} />  
      <Route path="/login" element={<Login />} />   
      <Route path="/signup" element={<Signup />} />   
      <Route path="/askquestion" element={<Ask />} />   


      </Routes>
      <Footer />
  
    </div>
  );
}

export default App;
//<Carousel />