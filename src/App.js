import './App.css';
import  { Routes, Route, Link }from "react-router-dom";
import Header from './Components/Navigation/Header';
import Navbody from './Components/navbody/Navbody';
import Carousel from './Components/carousel/Carousel';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Ask from './Components/ask/Ask';
import Dashboard from './Components/Dashboard/Dashboard';
import Footer  from './Components/Footer/Footer';
import Textbook  from './Components/Textbook/Textbook';
import Book  from './Components/Book/Book';
import Answer  from './Components/Answer/Answer';





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
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/textbook" element={<Textbook />} />
      <Route path="/book" element={<Book />} />
      <Route path="/answer" element={<Answer />} />
      </Routes>
      <Footer />
  
    </div>
  );
}

export default App;
//<Carousel />