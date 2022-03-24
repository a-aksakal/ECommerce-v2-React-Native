import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductContext from '../store/ProductContext';
import CartContext from '../store/CartContext';

function ListScreen() {
  const {product} = useContext(ProductContext);
  const {cart, total, AddCart, DeleteCart} = useContext(CartContext);

  const renderItem = ({item}) => {
    return (
      <View style={styles.product} key={item.id}>
        <View style={styles.productItem}>
          <View style={styles.productPhotoBox}>
            <Image
              style={styles.productPhoto}
              source={{
                uri: item.image,
              }}></Image>
          </View>
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{item.title}</Text>
            <Text style={styles.productInfos}>
              {item.description.substring(0, 30)}
            </Text>
            <Text style={styles.productInfos}>{item.price}</Text>
          </View>
        </View>
        <View style={styles.productCart}>
          <TouchableOpacity
            style={styles.cartTouch}
            onPress={() => AddCart(item)}>
            <Ionicons name="cart" size={12} color="#E82223"></Ionicons>
            <Text style={styles.cartButton}>SEPETE EKLE</Text>
          </TouchableOpacity>
          <Text style={styles.price}>
            {item.price.toFixed(2)}
            <Text style={styles.currency}>TL</Text>
          </Text>
        </View>
      </View>
    );
  };

  const Cart = () => {
    if (cart.length != 0) {
      return (
        <>
          <View style={styles.cartHeaderGroup}>
            <Text style={styles.cartHeader}>Ürünlerin Toplamı:</Text>
            <TouchableOpacity onPress={() => DeleteCart()}>
              <MaterialCommunityIcons
                name="delete"
                size={24}
                color="#E82223"></MaterialCommunityIcons>
            </TouchableOpacity>
          </View>
          <Text style={styles.cartDetail}>Toplam: {total.toFixed(2)} TL</Text>
          <Text style={styles.cartDetail}>
            Vergiler + Kargo: {(total * 0.1).toFixed(2)} TL
          </Text>
          <Text style={styles.cartTotal}>
            Genel Toplam: {(total + total * 0.1).toFixed(2)} TL
          </Text>
        </>
      );
    } else {
      return (
        <>
          <Text style={styles.cartHeader}>Sepet Boş</Text>
        </>
      );
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={product}
        renderItem={renderItem}
        style={styles.flatlist}></FlatList>
      <View style={styles.cart}>
        <Cart></Cart>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingBottom: 0,
    backgroundColor: '#FFFFFF',
  },
  flatlist: {
    flex: 1,
  },
  product: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottomColor: '#F1F3F5',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    marginBottom: 30,
    paddingBottom: 20,
  },
  productItem: {
    flex: 1,
    flexDirection: 'row',
  },
  productPhotoBox: {
    flex: 1,
    paddingTop: 15,
  },
  productPhoto: {
    flex: 1,
    borderRadius: 12,
    minWidth: 72,
    maxWidth: 72,
    minHeight: 75.4,
    maxHeight: 75.4,
    resizeMode: 'contain',
    backgroundColor: '#DADADA',
  },
  productDetails: {
    flex: 3,
    flexDirection: 'column',

    justifyContent: 'space-between',
  },
  productName: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.1,
    color: '#121212',
  },
  productInfos: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2,
    color: '#64738C',
  },
  productCart: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 85,
  },
  cart: {
    flex: 0.29,
    paddingTop: 40,
    flexDirection: 'column',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#469c54',
  },
  currency: {
    fontSize: 10,
  },
  cartHeaderGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cartHeader: {
    flex: 2,
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 33,
  },
  cartDetail: {
    flex: 1,
    fontWeight: '400',
    fontSize: 14,
    color: '#000000',
  },
  cartTotal: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 18,
  },
  cartTouch: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  cartButton: {
    flex: 1,
    color: '#E82223',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 16,
    letterSpacing: 0.9,
    marginLeft: 10,
  },
});

const mapStateToProps = state => {
  return {
    cart: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCreate: data => {
      dispatch(addCart(data));
    },
  };
};

export default ListScreen;
