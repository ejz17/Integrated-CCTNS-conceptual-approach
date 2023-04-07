// import React, { useEffect,useState } from 'react';
import {Routes, Route } from "react-router-dom"
import './routes/Login.css';
import Home from "./routes/home"
import Login from "./routes/Login"
import FirNumber from "./routes/firnumber"
import CourtNumber from "./routes/courtnumber"
import Captcha from "./routes/Captcha"
import Preview from "./routes/preview"
import SideCourt from "./routes/sidecourt"


function App(){

  return (

    <div className='App'>
    
 
    <Routes>
    <Route path="/" element={<Login/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/FirNumber" element={<FirNumber/>}/>
      <Route path="/CourtNumber" element={<CourtNumber/>}/>
      <Route path="/Captcha" element={<Captcha/>}/>
      <Route path="/Preview" element={<Preview/>}/>
      <Route path="/SideCourt" element={<SideCourt/>}/>
      
    </Routes>

    </div>
  
  );
}

export default App;
