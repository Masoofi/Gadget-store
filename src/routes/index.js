import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../container/Home';
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
