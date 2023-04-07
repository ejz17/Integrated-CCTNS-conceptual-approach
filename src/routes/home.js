import React from 'react'
import "./home.css"
// import FirNumber from "./firnumber"
// import CourtNumber from "./courtnumber" 
import Nav from "../components/nav"
import MEDIA from "../img/media.png"


const home = () => {
  return (
    <div>
      <Nav/>
      {/* <FirNumber/>
      <CourtNumber/> */}
       <div className='grt'>
     <h1>WELCOME TO i-PORTAL</h1>
       </div>
       <img src={MEDIA} alt="" className='media'/>
    </div>
      
  )
}

export default home