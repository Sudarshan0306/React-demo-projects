import React, { useReducer, useState } from "react";
import cartReducer from "../../reducers/cartReducer";

const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "TV", price: 1800 },
  { id: 3, name: "Mobile", price: 2800 },
];

const ShoppingCart = () => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div>
      <h2>🛍 Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.name} - ₹{product.price}
          </span>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}

      <h2>🛒 Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity} = ₹{item.price * item.quantity}
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity === 1}
              >
                -
              </button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <>
          <h3>Total: ₹{total}</h3>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
