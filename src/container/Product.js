import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductList } from '../data/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/reducer/cart';
import { PatchCheck } from 'react-bootstrap-icons';


function Product() {
  const params = useParams();
  const dispatch = useDispatch()
  const item = ProductList.find(
    (element) => element.id === parseInt(params.id))
  const list = useSelector((state) => state.cart.list)
  const element = list.find((i) => i.id === item.id);
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);

  const addToCart = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 3000)
    dispatch(addItem(item))
  };

  return (
    <div className="card mt-5 cart-card" style={{ width: 300 }}>
      {alert && <span className='alert mb-0 alert-success'><PatchCheck style={{fontSize:28}}/>Item Added To Cart</span>}
      <img
        src={item.thumbnail}
        height={200}
        width={200}
        alt={item.title}
        className='card-img-top border-radius-9 ' />

      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <h6 className='my-1'>Brand: {item.brand} </h6>
        <h6 className='my-1'>Price: {`$${item.price}`} </h6>
        <h6 className='my-1'>Discount: {`${item.discountPercentage} %`} </h6>
        <h6 className='my-1'>Rating: {item.rating} </h6>

        <div className=' mt-2' >
          {item.stock > 0 ? (
            <>
              <button className='btn btn-success my-1' onClick={() => navigate(`/checkout/${item.id}`)}>Buy Now</button>
              {element?.count > 0 ? <button className='ms-3 btn btn-info text-white my-1' onClick={() => navigate('/cart')}>
                Go to Cart
              </button> :
                <button className='ms-3 btn btn-warning text-white my-1' onClick={addToCart}>
                  Add to Cart
                </button>
              }
            </>
          ) : (
            <>
              <button
                className='btn btn-outline-danger my-1'>Out of Stock</button>
              <button
                className='ms-3 btn text-bg-primary my-1'>Notify Me</button>
            </>
          )}

        </div>
      </div>

    </div>
  )
}
export default Product;