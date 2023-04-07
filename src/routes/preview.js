import React from 'react'

import Nav from "../components/nav"
import "./preview.css"
import FIR from "../img/fir.png"
import COURT from "../img/court.png"
import PREVIEW from "../img/preview.png"
import { Link } from "react-router-dom";

const preview = () => {
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
             <div className="preview-fir">FIR Number<input type="text" placeholder='' className="preview1"/></div>
        
        <div className="preview-station">Police Station<input type="text" placeholder='' className="preview3"/></div>
        <div className="preview-year">Year<input type="text" placeholder='' className="preview4"/></div>
        <div className='twokeys'>
        <div className="key">Key<input type="text" placeholder='' className="key1"/></div>
        <div className="reenter-key">ReEnter key<input type="text" placeholder='' className="key2"/></div>
        </div>
        

        </div>
            </div>
          
            <div className="button-sub3">
                       <Link to="/">
                       <div className='toggle'>Submit</div>
                       </Link>
                       </div>
    </div>
    
    </div>


    </div>
  )
}

export default preview