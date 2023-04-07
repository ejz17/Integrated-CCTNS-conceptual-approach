// import React, { useState } from 'react'
import "./Login.css";
import profile from "../img/user.png"
import id from "../img/login.png"
import passwd from "../img/passwd.png"
import { Link } from 'react-router-dom';
import { Component } from "react";





export default class Login extends Component {
      constructor(props){
        super(props);
        this.state={
          user:"",
          pass:""
        };
        this.handleSubmit=this.handleSubmit.bind(this);

      }
     
      handleSubmit(e){
        e.preventDefault();
        const{user,pass}=this.state;
        console.log(user,pass);
      }

  render(){
  return (
    <form onSubmit={this.handleSubmit}>
    <div className="main">
    <div className="subject">
    <div className="sub-main">
      <div className='first-image'>
        <img src={profile} alt="login" className='profile'/>
       
      </div>
   
      
      <div>
        <img src={id}  alt="" className='id'/>
        <input type="text"  placeholder='user id' className='name'
         onChange={(e)=>this.setState({user:e.target
          .value})}/>
      </div>
        <img src={passwd}   alt="" className='word'/>
       <input type="password" placeholder='password'  className='name' 
       onChange={(e)=>this.setState({pass:e.target
       .value})}/>
       <div className="button">
                       <Link to="/home">
                       <div className='toggle'>Login</div>
                       </Link>
                       {/* onClick={()=>this.home(userid,password)} */}
                       
                          
                   
      </div>
      

    </div>
    
      
    </div>
    
  </div>
  </form>
  )
}

}
