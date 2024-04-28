import React, { useState } from 'react'
import Home from './Components/Home/Home'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Rdvf from './Components/Rdv/Rdvf';
import LoginForm from './Components/Signup/LoginForm';
import RegisterForm from './Components/Signup/RegisterForm';
import Profile from './Components/Profile/Profile';

function App() {
  

  return (
   <div>
   <BrowserRouter> 
   <NavBar/>
             <Routes>
                <Route path="/" element= {<Home/>}/>
                <Route path="/contact"element={<Contact/>}/>
                <Route path="/rdv" element= {<Rdvf/>}/>
                <Route path="/login" element= {<LoginForm/>}/>
                <Route path="/register" element= {<RegisterForm/>}/>
                <Route path="/profile" element= {<Profile/>}/>
              </Routes> 
    
   </BrowserRouter> 
   <Footer/>
    </div>
  
  )
}

export default App
