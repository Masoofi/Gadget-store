import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductListitem from '../components/ProductListitem';
import { modifyItem, removeItem } from '../redux/reducer/cart';
import { useNavigate } from 'react-router-dom'; 

export default function Cart() {
  const list = useSelector((state) => (state.cart.list))
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const incrementItem = (item) => {
    dispatch(modifyItem({ ...item, count: item.count + 1 }))
  }

  const decrementItem = (item) => {
    if (item.count === 1) {
      dispatch(removeItem(item))
    } else {
      dispatch(modifyItem({ ...item, count: item.count - 1 }))
    }
  };

  const removeItemCart = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <>
      {list.length > 0 ? (
        <>
          {list.map((item) => (
            <ProductListitem {...item} key={item.id}
              incrementItem={() => incrementItem(item)}
              decrementItem={() => decrementItem(item)}
              removeItem={() => removeItemCart(item)}
            />
          ))}
          <button className='btn btn-success mt-3 mb-5' onClick={() => navigate('/checkout')}>Go To Checkout</button>
        </>
      ) : (<div className='d-flex justify-content-center flex-column  align-items-center'>
      <h3 className='bg-primary text-white p-2 rounded'>No Item in Cart  </h3>

      <button className='btn btn-success' onClick={() => navigate('/')}>Back To Shop</button>
      </div>)}
    </>
  );
}
