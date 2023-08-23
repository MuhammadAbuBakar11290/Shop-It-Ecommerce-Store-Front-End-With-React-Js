import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, dispatch } = useCart();

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((product) => (
            <div className="cart-item" key={product.id}>
              <img src={product.image} alt={`Product ${product.id}`} />
              <div className="item-details">
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
                <button onClick={() => removeFromCart(product.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div className="cart-total">
          <p>Total: ${calculateTotal()}</p>
          <div className="proceed-to-payment">
            <Link to="/pages">
            <button>Proceed to Payment</button></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
