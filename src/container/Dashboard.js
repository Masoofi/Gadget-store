import React from 'react'
import { ProductList } from '../data/ProductList'
import ProductCart from '../components/ProductCart'

export default function Dashboard() {
    return (
        <div className='container d-flex flex-wrap justify-content-center p-3'>
           {ProductList.map((product) => <ProductCart {...product} key={product.id} />)}
        </div>
    )
}
