import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from "react";

const LocaleContext = createContext(null);

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState([{id:"tr",name:"Türkiye"},{id:"usa",name:"America"}]);
  const [localeId,setLocaleId] = useState("tr");
  const [localeName,setLocaleName] = useState("Türkiye");
  const values = {
    locale,
    setLocale,
    localeId,
    setLocaleId,
    localeName,
    setLocaleName
    
  };
  return <LocaleContext.Provider value={values}>{children}</LocaleContext.Provider>;
};

export default LocaleContext;