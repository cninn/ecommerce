import React from "react";
import all_products from "../components/Assets/all_product";

export const ShopContext = React.createContext(null);


const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < all_products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}


const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = React.useState(getDefaultCart());
 
  
  const addTocart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    console.log(cartItems);
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.new_price;
      }
    }
    return totalAmount;
  }

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  }




  const contextValue = {getTotalCartItems,getTotalCartAmount, all_products,cartItems,addTocart,removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
