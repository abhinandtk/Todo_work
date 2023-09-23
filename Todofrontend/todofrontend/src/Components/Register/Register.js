import React, { useState } from 'react'
import './Register.css'
import axios from 'axios'
import Nav from '../Nav/Nav'

export default function Register() {
   const [state,setState]=useState({})

  const inputChange=(event)=>{
       const {name,value}=event.target
       console.log({name,value});
       setState({...state,[name]:value})


    }
    const submit=()=>{
        console.log(state);
        axios.post('http://127.0.0.1:8000/api/UserRegisterApi',state).then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
        
        
    }


  return (
    <>
    <Nav></Nav>
    <div className="registerpagebox">
    <div className="registerbox">
    <form>
        <h5 className='text-center mb-3'>Register,Here</h5>
  <div class="form-group row ">
    <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10 inputrowreg">
    <input type="text" class="form-control" id="inputPassword" name='Name' onChange={inputChange}></input>
    </div>
  </div>
  <div class="form-group row ">
    <label for="staticEmail" class="col-sm-2 col-form-label">Contact</label>
    <div class="col-sm-10 inputrowreg">
    <input type="tel" class="form-control" id="inputPassword" name='Contact' onChange={inputChange}></input>
    </div>
  </div>
  <div class="form-group row ">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10 inputrowreg">
    <input type="email" class="form-control" id="inputPassword" name='Email' onChange={inputChange}></input>
    </div>
  </div>
  <div class="form-group row ">
    <label for="staticEmail" class="col-sm-2 col-form-label">Username</label>
    <div class="col-sm-10 inputrowreg">
    <input type="text" class="form-control" id="inputPassword" name='Username' onChange={inputChange}></input>
    </div>
  </div>
  <div class="form-group row ">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10 inputrowreg">
      <input type="password" class="form-control" id="inputPassword" name='Password' onChange={inputChange}></input>
    </div>
  </div>
  <input type="button" value='Register' className=' butinreg' onClick={submit} />
</form>

    </div>

    </div>
   

    </>  )
}
