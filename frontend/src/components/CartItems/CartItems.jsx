import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";

const CartItems = () => {
  const {getTotalCartAmount, all_products, cartItems, addTocart, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="cartItems">
      <h1>Cart Items</h1>
    <div className="cartitems-container">

    <div className="format-main">
        <div className="format-body">
          {all_products.map((item) => {
            if (cartItems[item.id] > 0) {
              return (
                <div className="format-item" key={item.id}>
                  <div className="bag-left">
                    <div className="format-item-img">
                      <img src={item.image} alt="product" />
                    </div>
                    <div className="format-item-name">
                      <p>{item.name}</p>
                    </div>
                  </div>
                  <div className="bag-right">
                    <div className="qcontrols">
                      <span onClick={() => addTocart(item.id)}> + </span>

                      <div className="format-item-quantity">
                        <p>QTY : </p>
                        {cartItems[item.id]}
                      </div>

                      <span onClick={() => removeFromCart(item.id)}> - </span>
                    </div>
                    <div className="format-item-price">
                      <span>Product Price : </span>
                      {item.new_price}$
                    </div>

                    <div className="total">
                      <span>Total : </span>
                      {item.new_price * cartItems[item.id]}$
                    </div>
                  </div>
                  <div className="format-item-remove">
                    <button onClick={() => removeFromCart(item.id)}>
                      <i className="fa-solid fa-rectangle-xmark"></i>
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>

      <div className="cartitems-down">
      <div className="cart-items-promocode">
          <p>Have a promocode?</p>
            <input type="text" placeholder="ENTER PROMOCODE" />           
            <button>Apply</button>
          </div>
          <hr style={{backgroundColor: 'black', height: '2px',margin: '15px 0', opacity: '0.5'}}/>
        <span>Cart Totals</span>
        <div className="cartitems-down-price">
          <span>Subtotal = </span>
          <span>{getTotalCartAmount()}$</span>
        </div>
        <div className="cartitems-down-price">
          <span>Shipping = </span>
          <span> Free</span>
        </div>
        <div className="cartitems-down-price">
          <span>Total = </span>
          <span>  {getTotalCartAmount()}$</span>
        </div>
        <button>Proceed to checkout</button>
      </div>
   
      </div>  

    </div>
  );
};

export default CartItems;
