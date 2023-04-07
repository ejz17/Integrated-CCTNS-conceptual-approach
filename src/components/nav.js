import React from 'react'
import "./nav.css"
import iconhome from "../img/home.png"
import logout from "../img/logout.png"
import iconregister from "../img/reg.png"
import iconsearch from "../img/srh.png"
import { Link } from 'react-router-dom';



const nav = () => {
  return (
    <div>
           
<div className="bar">
            <nav className="nain-nav">
                <div className="menu-link">
                    <ul className="nav-menu">
                        <li>
                            <Link to="/home">
                                <img src={iconhome} alt="" className='icon-home'/>
                             </Link>
                        </li>
                        <li>
                            <Link to="/firnumber">
                            <img src={iconregister} alt="" className='icon-register'/>
                            </Link> 
                        </li>
                        <li>
                                <Link to="/Captcha">
                                <img src={iconsearch} alt="" className='icon-search'/>
                                </Link>
                         </li>
                            
                    </ul>
                    <ul>
                        <Link to="/">
                        <img src={logout} alt="" className='logout'/>
                        </Link>
                    </ul>
                </div>

            </nav>

        </div>
   
    </div>
  )
}

export default nav