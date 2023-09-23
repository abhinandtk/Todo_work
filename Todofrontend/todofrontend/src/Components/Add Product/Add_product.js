import React, { useState } from 'react'
import './Add_product.css'
import axios from 'axios'
import Nav from '../Nav/Nav'
export default function Add_product() {
    const [state,inputState]=useState({})
    const inputChange=(event)=>{
        const {name,value}=event.target
        inputState({...state,[name]:value})
        console.log(state);

    }
    const submit=()=>{
        axios.post('http://127.0.0.1:8000/api/ProductAdd',state).then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
    }

  return (
    <>
    <Nav></Nav>
    <div className="addprobox">
    <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Name</label>
      <input type="text" class="form-control" id="inputEmail4" name='Name'onChange={inputChange}></input>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Quantity</label>
      <input type="password" class="form-control" id="inputPassword4" name='Quantity' onChange={inputChange}></input>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Price</label>
    <input type="text" class="form-control" id="inputAddress" name='Price' onChange={inputChange}></input>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Category</label>
    <input type="text" class="form-control" id="inputAddress2" name='Category' onChange={inputChange}></input>
  </div>
  <button type="button" class="btn btn-primary" onClick={submit}>Sign in</button>
</form>
        
    </div>
   
    
    </>
  )
}
