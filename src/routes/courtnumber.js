import React from 'react'
import "./courtnumber.css"
import Nav from "../components/nav"

import FIR from "../img/fir.png"
import COURT from "../img/court.png"
import PREVIEW from "../img/preview.png"
import {Link} from "react-router-dom"



const courtnumber = () => {
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
             <div className="places">
                           <ul className="sub-places">
                           
                            <li>
                              <select className='states'>
                               <option value="select state">SELECT STATE</option>
                               <option value="tamilnadu">TAMILNADU</option>
                              </select>
                            </li>

                            <li>
                              <select className='district'>
                               <option value="select district">SELECT DISTRICT</option>
                               <option value="chennai">CHENNAI</option>
                               <option value="salem">SALEM</option>
                               <option value="erode">ERODE</option>
                               <option value="coimbotore">COIAMBOTORE</option>
                               <option value="namakkal">NAMAKKAL</option>
                               <option value="kanyakumari">KANYAKUMARI</option>
                               <option value="tenkasi">TENKASI</option>
                               <option value="theni">THENI</option>
                               <option value="tirunelveli">TIRUNELVELI</option>
                              </select>
                            </li>

                            <li>
                              <select className="courtcomplex">
                              <option value="select court complex"> SELECT COURT COMPLEX</option>
                                <option value="special court">DISTRICT SPECIAL COURT</option>
                                <option value="labour court">LABOUR COURT</option>
                                <option value="rasipuram court">RASIPURAM COURT</option>
                                <option value="combined court">SANGAGIRI COURT</option>
                              </select>
                            </li>
                            
                          </ul>
                      </div>
            </div>
          
       
    </div>
   
                         {/* <div className="secondbox-court">COURT NUMBER
                                <select className="number-court">
                                         <option value="court no"></option>
                                         <option value="court1"> SH24</option>
                                         <option value="court2"> AP31</option>
                                         <option value="court3"> MJ12</option>
                                         <option value="court4">WQ43</option>

                                </select>
                         </div> */}
  
 
                         <div className="button-sub2">
                       <Link to="/preview">
                       <div className='ta'>Submit</div>
                       </Link>
                       </div>
    </div>
       
    </div>
  )
}

export default courtnumber