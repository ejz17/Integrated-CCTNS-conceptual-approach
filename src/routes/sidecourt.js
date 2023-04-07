import React from 'react'
import "./sidecourt.css"
import iconhome from "../img/home.png"
import logout from "../img/logout.png"
import PDF from "../img/pdf.png"
import iconsearch from "../img/srh.png"
import { Link } from 'react-router-dom';

const sidecourt = () => {
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
                        {/* <li>
                            <Link to="/firnumber">
                            <img src={iconregister} alt="" className='icon-register'/>
                            </Link> 
                        </li> */}
                        <li>
                                <Link to="/Captcha">
                                <img src={iconsearch} alt="" className='icon-search'/>
                                </Link>
                         </li>
                            
                    </ul>
                    <ul>
                        <h3>COURT NUMBER</h3>
                        </ul>
                    <ul>
                        <Link to="/">
                        <img src={logout} alt="" className='logout'/>
                        </Link>
                    </ul>
                </div>

            </nav>

        </div>


        <div>
          <table className='table1'>
            <thead>
            <tr>
              <th>FIR Number</th>
              <th>Associated Police Station</th>
              <th>Year</th>
              <th>File</th>
              <th>View</th>
            
            </tr>
            </thead>
            <tbody> 
              <tr>
              <td>1</td>
              <td>salem station</td>
              <td>2022</td>
              <td>F25</td>
             <td>
              <a href='https://drive.google.com/file/d/1Z8QRqTPYi6E6mn7FjmQe6H4NTDzSp20G/view?usp=share_link'>
              <img src={PDF} alt="" className='icon-home'/>
              </a></td>
             </tr>
            </tbody>
            <tbody>
            <tr>
              <td>2</td>
              <td>salem station</td>
              <td>2021</td>
              <td>F25</td>
              <td>
                <a href="https://drive.google.com/file/d/1bsGfxWfeJGKzDR4BqZGVgMinxre0A5VL/view?usp=share_link">
                <img src={PDF} alt="" className='icon-home'/>
                </a>
                </td>
                </tr>
              
              
            </tbody>
          </table>
        </div>
             

         {/* <div>
         <table className='table1'>
        <thead>
          <tr className='hey'>
            <th class="text-center">FIR Number</th>
            <th class="text-center">Associated Police Station</th>
            <th class="text-center">Year</th>
            <th class="text-center">File</th>
            <th class="text-center">Station</th>
          
          </tr>
        </thead>
        <tbody >
          <tr className='hi'>
            <td class="z" >Aurelia Vega</td>
            <td class="a" contenteditable="true">30</td>
            <td class="b" contenteditable="true">Deepends</td>
            <td class="c" contenteditable="true">Spain</td>
           
            {/* <td class="pt-3-half">
              <span class="table-up"
                ><a href="#!" class="indigo-text"
                  ><i class="fas fa-long-arrow-alt-up" aria-hidden="true"></i></a
              ></span>
              <span class="table-down"
                ><a href="#!" class="indigo-text"
                  ><i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i></a
              ></span>
            </td> */}
            {/* <td>
              <span className="table-remove"
                ><button type="button" class="btn btn-danger btn-rounded btn-sm my-0">
                  View
                </button></span>
            </td>
          </tr>
         
          <tr className='hi'>
            <td class="z" contenteditable="true">Guerra Cortez</td>
            <td class="a" contenteditable="true">45</td>
            <td class="b" contenteditable="true">Insectus</td>
            <td class="c" contenteditable="true">USA</td>
             */}
            {/* <td class="pt-3-half">
              <span class="table-up"
                ><a href="#!" class="indigo-text"
                  ><i class="fas fa-long-arrow-alt-up" aria-hidden="true"></i></a
              ></span>
              <span class="table-down"
                ><a href="#!" class="indigo-text"
                  ><i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i></a
              ></span>
            </td> */}
            {/* <td>
              <span className="table-remove"
                ><button type="button" class="btn btn-danger btn-rounded btn-sm my-0">
                  View
                </button></span>
              
            </td>
          </tr>
      
         
         
        </tbody>

        </table>
         </div> */}

    </div>
  )
}

export default sidecourt