// import React, { useState,useEffect} from 'react'
// import Nav from "../components/nav"
// import "./search.css"

// const search = () => {
//   return (
//     <div>
//         <Nav/>

// {/* <div className="overall"> */}
//              <div className="search-fir">FIR Number<input type="text" placeholder='' className="search1"/></div>
//          {/* <div className="captcha-station">Year<input type="text" placeholder='' className="search2"/></div>
//         <div className="inbox-preview">captcha<input type="text" placeholder='' className="search3"/></div> */}
//         </div>
//     // </div>
//   )
// }

// export default search

import React, { useState} from 'react'
import './Captcha.css';
import  Nav from "../components/nav"
import { Link } from 'react-router-dom';
// import cabbol from "../img/captcha.png"

function Captcha (){
  
  const [user,setUser]=useState({
    username:""
  });
  
  const charecters='abc123';
  function generateString(length){
    let result="";
    const charecterLength=charecters.length;
    for(let i=0;i<length;i++){
      result+=charecters.charAt(Math.floor(Math.random()*charecterLength))

    }
    return result;
  }

  const captcha=generateString(6)
  let handleChange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    user[name]=value;
    setUser(user);
  }

  const onSubmit=e=>{
    var element=document.getElementById("succesBTN");
    var inputData=document.getElementById("inputType");

    element.style.cursor="wait";
    element.innerHTML="checking...";
    inputData.disabled=true;
    element.disabled=true;
    var myFunctions=function(){
      if(captcha===user.username){
        element.style.backgroundColor="green";
        element.style.color="black"
        element.innerHTML="Captcha Verified";
        element.disabled=true;
        element.style.cursor="not-allowed";
        inputData.style.display="none";
        
        
      }
      else{
          element.style.backgroundColor   = "red";
          element.style.cursor = "not-allowed";
          element.innerHTML  = "Not Matched";
          element.disabled = true;
          //  element.disabled = true;
          var myFunction = function(){
            element.style.backgroundColor   = "#007bff";
            element.style.color="black"
            element.style.cursor = "pointer";
            element.innerHTML  = "Verify Captcha";
            element.disabled = false;
            inputData.disabled = false;
            inputData.value ='';
          };

         
          setTimeout(myFunction,5000);
        }
      }   
      setTimeout(myFunctions,5000); 
};

 return (
  <div>
    <Nav/>
   
    <div class="a">
        <div className="search-fir"><input type="text" placeholder='FIR Number' className="search1"/></div>
          <div>
          <div className="search-key"><input type="text" placeholder='key' className="search1"/></div>
            <input type="text" id="inputType" className="form-control"placeholder="Enter Captcha"
              name="username"  onChange={handleChange} autocomplete="off"/>
               <h4 id="captcha" style={{ marginTop:"162px",marginLeft:"650px",position:"absolute",fontSize:"25px"}}>{captcha}</h4>
         
              {/* <img src={cabbol} alt="" className='icon-court'/> */}
            
              </div>
             
              

              <div>
     
                  
                





              </div>
              
              
              <div>
            <button type="button" id="succesBTN" onClick={onSubmit} className="capton">Verify Captcha
            </button>
            </div>
          </div>
      
         
      </div>
    // </div>
  );
}


export default Captcha