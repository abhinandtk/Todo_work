import React, { useEffect, useState } from 'react'
import './Profile.css'
import axios from 'axios'
import Nav from '../Nav/Nav'

export default function Profile() {
    const [state,setState]=useState('none')
    const [dis,setDis]=useState('block')
    const [userview,setUser]=useState({})
    const [val,setval]=useState([])
    const id=localStorage.getItem('id')
    const submit=()=>{
        setState('block')
        setDis('none')
        
    }
    const updatemethod=(id)=>{
      console.log(id);
      axios.put(`http://127.0.0.1:8000/api/Updateuser/${id}`,val).then((response)=>{
        console.log(response);
        window.location.reload()
      }).catch((error)=>{
        console.log(error);
      })

    }
    useEffect(()=>{
      axios.get(`http://127.0.0.1:8000/api/Getsingleuser/${id}`).then((response)=>{
        console.log(response);
        setUser(response.data.data[0])
      }).catch((error)=>{
        console.log(error);
      })
    },[])
   const inputchange=(event)=>{
    const {name,value}=event.target
    setval({...val,[name]:value})

    }
    console.log(val);
  return (
    <>
    <Nav></Nav>
    <div className="prodiv">
       <div className="lenpdiv">
        <h3 className='text-center mt-5'>profile</h3>
        <div className="imagediv "></div>
       </div>
       <div className="bigpdiv">
        <h3 className='text-center mt-5'>Profile</h3>
        <div className="proviewdiv" style={{display:dis}}>
            <h3>Name : {userview.Name}</h3>
            <h3>Contact : {userview.Contact}</h3>
            <h3>Email : {userview.Email}</h3>
            <input type="button" value='Edit' onClick={submit}/>
        </div>
        <div className="hidediv" style={{display:state}}>
        <form>
  <div class="form-row">
    <div class="col-md-10 mb-3">
      <label for="validationDefault01">Name</label>
      <input type="text" class="form-control" id="validationDefault01" name='Name' onChange={inputchange} defaultValue={userview.Name}  required></input>
    </div>
  </div>
  <div class="form-row">
  <div class="col-md-10 mb-3">
      <label for="validationDefault02">Contact</label>
      <input type="text" class="form-control" id="validationDefault02" name='Contact' defaultValue={userview.Contact} onChange={inputchange} required></input>
    </div>
  </div>
  <div class="form-row">
  <div class="col-md-10 mb-3">
      <label for="validationDefault02">Email</label>
      <input type="text" class="form-control" id="validationDefault02" name='Email' defaultValue={userview.Email} onChange={inputchange} required></input>
    </div>
  </div>
  <button class="btn btn-primary" type="button" onClick={()=>{updatemethod(userview.id)}}>Submit form</button>
</form>
            
        </div>
       </div>
    </div>
    </>
  )
}
