import React from 'react'
import Header from '../components/Header'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Product from './Product'
import Cart from './Cart'
import CheckOut from './CheckOut'
import Success from './Success'



export default function Home() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Dashboard/>} />
                <Route path='/product/:id' element={<Product/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/checkout/'>
                    <Route path='' element={<CheckOut/>}/>
                    <Route path=':id' element={<CheckOut/>}/>
               </Route>   
               <Route path='/success' element={<Success/>}/>
            </Routes>
        </div>
    )
}
