import React from 'react'
import { HouseFill, Cart3 } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    return (
        <div className=' container-fluid mb-5 bg-primary text-white p-2' >
            <h4 className='p-2 m-0 d-inline text-decoration-underline cursor-pointer' role='button'><span style={{color:"#faee00",fontWeight:"bold" }}><span style={{fontSize:'32px'}}>𝓖</span>adget</span> 𝓢tore</h4>
            <div className='container-fluid d-flex justify-content-between align-items-center bg-primary text-white p-1'>
                <div className='mt-2 mb-1 col-md-4 me-sm-1 d-flex justify-content-between align-items-center'>
                    <HouseFill className='me-1' role='button' size={32} onClick={() => navigate('/')}/>
                    <input
                        className='form-control ms-1  form-control-sm'
                        type='search'
                        placeholder='Search...'
                    />
                </div>
                <Cart3 className='me-md-3' role='button' onClick={() => navigate(`/cart`) } size={30} />
            </div>

        </div>
    )
}
