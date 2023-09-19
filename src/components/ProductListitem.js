import React from 'react'
import { Plus, Dash } from 'react-bootstrap-icons';

export default function ProductListitem(props) {
    return (
        <div className="card my-4 querie-card mx-md-auto cart-card rounded" style={{ maxWidth: 600 }} >
            <div className="row  g-0">
                <div className="col-md-6">
                    <img
                        src={props.thumbnail}
                        height={220}
                        width={300}
                        alt={props.title}
                        className='border-radius-9 p-1' />
                </div>
                <div className="col-md-6">
                    <div className="card-body ms-sm-2 text-start">
                        <h5 className="card-title">{props.title}</h5>
                        <h6 className='my-1'>Brand: {props.brand} </h6>
                        <h6 className='my-1'>Price: {`$${props.price}`} </h6>
                        <h6 className='my-1'>Discount: {`${props.discountPercentage} %`} </h6>
                        <h6 className='my-1'>Rating: {props.rating} </h6>
                        <div className='mt-3'>
                            <button className='btn p-0  text-white rounded bg-secondary'
                            ><Dash style={{ fontSize: 26 }} onClick={props.decrementItem} /></button>

                            <span className='mx-2 badge text-bg-primary ' style={{ Width: 10 }}>{props.count}</span>

                            <button className='btn p-0 text-white rounded bg-success' >
                                <Plus className='' style={{ fontSize: 26 }} onClick={props.incrementItem} />
                            </button>

                            <button className='ms-3 btn-sm btn btn-outline-danger' onClick={props.removeItem}>Remove</button>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    )
}

