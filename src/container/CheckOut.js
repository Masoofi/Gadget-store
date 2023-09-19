import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProductListitem from '../components/ProductListitem';
import { ProductList } from '../data/ProductList'
import { useNavigate, useParams } from 'react-router-dom';

export default function CheckOut() {
  const params = useParams();
  const list = useSelector((state) => (state.cart.list))
  const [state, setState] = useState(
    params.id
      ? [{
        ...ProductList.find(element => element.id === parseInt(params.id)), count: 1
      },
      ]
      : list
  );


  const navigate = useNavigate();

  const incrementItem = (item) => {
    const index = state.findIndex(product => product.id === item.id);
    setState((state) => [
      ...state.slice(0, index),
      { ...item, count: item.count + 1 },
      ...state.slice(index + 1)
    ])
  }

  const decrementItem = (item) => {
    if (item.count === 1) {
      removeItemCart(item)
    } else {
      const index = state.findIndex(product => product.id === item.id);
      setState((state) => [
        ...state.slice(0, index),
        { ...item, count: item.count + 1 },
        ...state.slice(index + 1)
      ])
    }
  };

  const removeItemCart = (item) => {
    const index = state.findIndex(product => product.id === item.id);
    setState((state) => [
      ...state.slice(0, index),
      ...state.slice(index + 1)
    ])
  };

  return (
    <>
      {state.length > 0 ? (
        <>
          {list.map((item) => (
            <ProductListitem {...item} key={item.id}
              incrementItem={() => incrementItem(item)}
              decrementItem={() => decrementItem(item)}
              removeItem={() => removeItemCart(item)}
            />
          ))}
          <button className='btn btn-success mt-3 mb-5' onClick={() => navigate('/success')}>Place Order</button>
        </>
      ) : (<div className='d-flex justify-content-center flex-column align-items-center'>
        <h3 className='bg-primary text-white p-2 rounded'>No Item in Checkout</h3>

        <button className='btn btn-success' onClick={() => navigate('/')}>Back To Shop</button>
      </div>)}
    </>
  );
}
