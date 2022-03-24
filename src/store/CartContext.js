import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useState} from 'react';
import {storeCart} from '../helper/StorageHelper';
storeCart;
const CartContext = createContext(null);

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const AddCart = item => {
    var cartItem = cart.find(q => q.id == item.id);

    if (cartItem == undefined) {
      item.quantity = 1;

      setCart([...cart, item]);
      storeCart([...cart, item]);
      setTotal(total + item.price);
    } else {
      cartItem.quantity = cartItem.quantity + 1;

      setCart([...cart]);
      storeCart([...cart]);
      setTotal(total + item.price);
    }
  };

  const DeleteCart = () => {
    setCart([]);
    storeCart([]);
    setTotal(0);
  };

  const values = {
    cart,
    total,
    setCart,
    AddCart,
    DeleteCart,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContext;
