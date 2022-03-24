import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Container,
  AccountHeader,
  Details,
  DetailsGroup,
  Name,
  FormButton,
  ButtonGroup,
  Line,
  LocaleText,
} from "../styles/ProfileStyle";
import AccountScreen from "./AccountScreen";
import LocaleContext from "../store/LocaleContext";
import { Dropdown } from "react-native-element-dropdown";
import { Formik } from "formik";

export default function ProfileScreen({ route, navigation }) {
  const { email, password, localeId, localeName } = route.params;
  const { locale } = useContext(LocaleContext);
  const LogOut = (values) => {
    navigation.navigate("account", values);
  };

  const _renderItem = (item) => {
    return (
      <View style={styles.container}>
        <Text style={styles.textItem}>{item.name}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#FFFFFF" }}>
      <Container>
        <AccountHeader>Account</AccountHeader>
        <Name>Alican Aksakal</Name>
        <Formik
          initialValues={{
            localeId: localeId,
            localeName: localeName,
          }}
          onSubmit={(values) => LogOut(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            setFieldValue,
          }) => (
            <>
              <DetailsGroup>
                <Details>E-mail: {email}</Details>
                <Details>Password: {password}</Details>
                <Details>Locale: {values.localeId}</Details>
              </DetailsGroup>
              <Line></Line>
              <LocaleText>Locale</LocaleText>

              <Dropdown
                placeholder={values.localeName}
                data={locale}
                placeholderStyle={styles.dropdownPlaceholder}
                renderItem={(item) => _renderItem(item)}
                style={styles.dropdown}
                value={values.localeId}
                onChange={(item) => {
                  setFieldValue("localeId", item.id);
                  setFieldValue("localeName", item.name);
                }}
              ></Dropdown>

              <ButtonGroup>
                <FormButton
                  title="Log Out"
                  type="clear"
                  style={styles.formButton}
                  titleStyle={styles.formButtonTitle}
                  onPress={handleSubmit}
                ></FormButton>
              </ButtonGroup>
            </>
          )}
        </Formik>
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  formButton: {
    height: 56,
    borderWidth: 1,
    borderColor: "#E82223",
    borderRadius: 12,
    paddingTop: 8,
  },
  formButtonTitle: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 18,
    fontStyle: "normal",
    color: "#E82223",
  },
  dropdown: {
    borderBottomWidth: 1,
    borderBottomColor: "#64738C",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  dropdownPlaceholder: {
    fontSize: 16,
  },
});
