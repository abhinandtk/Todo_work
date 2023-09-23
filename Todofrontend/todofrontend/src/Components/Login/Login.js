import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Nav from '../Nav/Nav'

export default function Login() {
 
    const [state,setState]=useState({})
    const navigate=useNavigate()

    const inputChange=(event)=>{
         const {name,value}=event.target
         console.log({name,value});
         setState({...state,[name]:value})
  
  
      }
      const submit=()=>{
          console.log(state);
          axios.post('http://127.0.0.1:8000/api/LoginUserApi',state).then((response)=>{
            const id=localStorage.setItem('id',response.data.data.User_id)
            console.log(response.data.data);
            localStorage.setItem('role',response.data.data.role)
              if(response.data.data.role==='User'){
                navigate('/')
              }
              else if(response.data.data.role==='Admin'){
                navigate('/')
              }

              
          }).catch((error)=>{
              console.log(error);
          })
          
          
      }
  
  return (
    <>
     <Nav></Nav>
    <div className="loginpagebox">
    <div className="loginbox">
    <form>
        <h5 className='text-center m-0'>Hello</h5>
        <h6 className='text-center mb-3'>Mobiles</h6>
  <div class="form-group row ">
    <label for="staticEmail" class="col-sm-2 col-form-label">Username</label>
    <div class="col-sm-10 inputrowlog">
    <input type="email" class="form-control" id="inputPassword" name='Username' onChange={inputChange}></input>
    </div>
  </div>
  <div class="form-group row ">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10 inputrowlog">
      <input type="password" class="form-control" id="inputPassword" name='Password' onChange={inputChange}></input>
    </div>
  </div>
  <input type="button" value='Login' className=' butinlog' onClick={submit} />
</form>

    </div>

    </div>
   

    </>
  )
}
