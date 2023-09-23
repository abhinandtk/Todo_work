import React from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom'

export default function Nav() {
  const navigate=useNavigate()
  const role=localStorage.getItem('role')
  const Logout=()=>{
    localStorage.removeItem('role')
    navigate('/Login')
  }
  return (
    <>
    {role==='User' ?
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <a class="navbar-brand" href="#">Products</a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
   
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav mr-auto">
         <li class="nav-item active">
           <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
         </li>
         <li class="nav-item active">
           <a class="nav-link" href="/Viewproduct">View product</a>
         </li>
       
         <li class="nav-item active">
           <a class="nav-link" href="/Profile">Profile</a>
         </li>
         <li class="nav-item active">
           <a class="nav-link"  onClick={Logout}>Logout</a>
         </li>
       </ul>
       <form class="form-inline my-2 my-lg-0">
         <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
       </form>
     </div>
   </nav>:
   role==="Admin" ?
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <a class="navbar-brand" href="#">Products</a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
 
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <ul class="navbar-nav mr-auto">
       <li class="nav-item active">
         <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
       </li>
       <li class="nav-item active">
         <a class="nav-link" href="/Register">Register</a>
       </li>
       <li class="nav-item active">
         <a class="nav-link" href="/Addproduct">Add product</a>
       </li>
       <li class="nav-item active">
         <a class="nav-link" href="/Viewproduct">View product</a>
       </li>
       <li class="nav-item active">
         <a class="nav-link"  onClick={Logout}>Logout</a>
       </li>
     </ul>
     <form class="form-inline my-2 my-lg-0">
       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
     </form>
   </div>
 </nav>:
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Products</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/Login">Login</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/Register">Register</a>
      </li>

    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

   
    }
   
    </>
  )
}
