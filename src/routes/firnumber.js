import React from 'react'
import "./firnumber.css"
import Nav from "../components/nav"

import FIR from "../img/fir.png"
import COURT from "../img/court.png"
import PREVIEW from "../img/preview.png"
import { Link } from "react-router-dom";


const firnumber = () => {
  return (
    <div>
        <Nav/>
        <div className="over-box">
         <div className="inner-box">
            <div className="lists">
               <nav className="nain-nav">
                <div className="sub-one">
                 <ul className="second-menu">
                    <li>
                       <div className="fir-number">
                       <Link to="/firnumber">
                       <img src={FIR} alt="" className='icon-fir'/> FIR Number
                       </Link>
                          
                       </div>
                    </li>
                    <li>
                    <div className="court-number">
                    <Link to="/courtnumber">
                    <img src={COURT} alt="" className='icon-court'/>Court Number
                    </Link>
                    </div>
                      
                    </li>
                    <li>
                    <div className="preview">
                    <Link to="/preview" className="text">
                    <img src={PREVIEW} alt="" className='icon-preview'/> Preview
                    </Link>
                   
                           
                        
                      
                       </div>
                   </li>
                </ul>
                
                </div>
             </nav>
             <div className="overall">
             <div className="inbox-fir">FIR Number<input type="text" placeholder='' className="space1"/></div>
         <div className="inbox-station">Police Station<input type="text" placeholder='' className="space2"/></div>
        <div className="inbox-preview">Year<input type="text" placeholder='' className="space3"/></div>
       
        </div>
    
            </div>
           
        <div className="button-sub1">
                       <Link to="/courtnumber">
                       <div className='toggle'>Submit</div>
                       </Link>
                       </div>
         
    </div>
<div>


    {/* <button className="submit">
        Submit
    </button> */}
</div>
    </div>
    </div>
  )
}

export default firnumber