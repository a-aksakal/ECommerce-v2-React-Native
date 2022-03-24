import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState, useEffect } from "react";

const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const values = {
    product,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductContext;
