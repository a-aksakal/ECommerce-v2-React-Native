import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CartProvider} from './src/store/CartContext';
import LocaleContext, {LocaleProvider} from './src/store/LocaleContext';
import {ProductProvider} from './src/store/ProductContext';
import MainTab from './src/navigations/MainTab';

export default function App() {
  return (
    <LocaleProvider>
      <ProductProvider>
        <CartProvider>
          <MainTab></MainTab>
        </CartProvider>
      </ProductProvider>
    </LocaleProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
