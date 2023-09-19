import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCart(props) {
    const navigate = useNavigate();
    return (
        <div className="card m-2 cursor-pointer " style={{ width: 300 }} role='button' onClick={() => navigate(`/product/${props.id}`)}>

            <img
                src={props.thumbnail}
                height={200}
                width={200}
                alt={props.title}
                className='card-img-top border-radius-9' />

            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className='my-1'>Brand: {props.brand} </h6>
                <h6 className='my-1'>Price: {`$${props.price}`} </h6>
                <h6 className='my-1'>Discount: {`${props.discountPercentage} %`} </h6>
                <h6 className='my-1'>Rating: {props.rating} </h6>

                <div className='mt-2'>
                    {props.stock > 0 ? <button className='btn btn-success my-1'>Available</button> : <button
                        className='btn btn-outline-danger my-1'>Out of Stock</button>}
                </div>
            </div>

        </div>
    )
}
