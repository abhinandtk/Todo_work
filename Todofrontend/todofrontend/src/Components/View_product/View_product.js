import React, { useEffect, useState } from 'react'
import './View_product.css'
import axios from 'axios'
import Nav from '../Nav/Nav'

export default function View_product() {
    const [state,setState]=useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/Viewproduct').then((response)=>{
            console.log(response);
            setState(response.data.data)
            console.log(state);

        }).catch((error)=>{
            console.log(error);
        })
    })
  return (
    <>
    <Nav></Nav>
    <div className="Viewpbox">
        <div className="headbox">
            <div className="cubes">Name</div>
            <div className="cubes">Quantity</div>
            <div className="cubes">Price</div>
            <div className="cubes">Category</div>
            
        </div>
        {state.map((value,key)=>(
        <div className="Productvbox">
             <div className="cubes">             
             <h6>{value.Name}</h6>
             </div>
            <div className="cubes">             
            <h6>{value.Quantity}</h6>
            </div>
            <div className="cubes">             
            <h6>{value.Price}</h6>
            </div>
            <div className="cubes">             
            <h6>{value.Category}</h6>
            </div>
         </div>

        ))}
       
    </div>
    </>
  )
}
