import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeCart = async (value) => {
  try {
    await AsyncStorage.setItem("cart", JSON.stringify(value));
  } catch (e) {
    console.log("Store Set error", e);
  }
};

export const getStoreCart = async () => {
  try {
    const value = await AsyncStorage.getItem("cart");
    if (value !== null) {
      return JSON.parse(value);
    } else {
      return [];
    }
  } catch (e) {
    console.log("Get Store Error", e);
  }
};
