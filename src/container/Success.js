import React, { useState } from 'react'
import {  PatchCheckFill, SendCheck } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

export default function Success() {
   const [placeOrder , setPlaceOrder] = useState(false)
  const navigate = useNavigate();

  
        setTimeout(() => setPlaceOrder(true), 3000)
        
    return (
        
        <div className='text-center mx-1'>
            {placeOrder && <div className='card mx-auto' style={{maxWidth:400, height:500}}>
                 <div className='mb-5'>
                    <PatchCheckFill className='mt-5 text-success' style={{ fontSize:120}}/>
                 </div>
                 <div className='mt-5'>
                    <SendCheck className='text-success' style={{fontSize:48}} /><h3>Order has been Placed</h3>
                 </div>
                 <button className='btn btn-success mx-auto mt-3 btn-sm' onClick={() => navigate('/')}><h5 className=' m-0'>Countine Shoping</h5></button>
            </div>}
            
        </div>

    )
}
