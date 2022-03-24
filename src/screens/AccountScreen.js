import {View, Text, TouchableOpacity, StyleSheet, Picker} from 'react-native';
import React, {useContext, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  AccountHeader,
  Container,
  FormButton,
  FormGroup,
  FormInput,
  LocaleText,
} from '../styles/AccountStyle';
import {Input, ListItem} from 'react-native-elements';
import {Dropdown} from 'react-native-element-dropdown';
import LocaleContext, {LocaleProvider} from '../store/LocaleContext';
import {Field, Formik} from 'formik';

function AccountScreen({navigation}) {
  const {locale} = useContext(LocaleContext);
  const LoginCheck = values => {
    navigation.navigate('profile', values);
  };
  const _renderItem = item => {
    return (
      <View style={styles.container}>
        <Text style={styles.textItem}>{item.name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
      <Container>
        <AccountHeader>Account</AccountHeader>
        <Formik
          initialValues={{
            email: '',
            password: '',
            localeId: 'tr',
            localeName: 'Türkiye',
          }}
          onSubmit={values => LoginCheck(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            setFieldValue,
          }) => (
            <FormGroup>
              <FormInput>
                <Input
                  placeholder="E-Mail"
                  onChangeText={handleChange('email')}
                />
              </FormInput>
              <FormInput>
                <Input
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                />
              </FormInput>
              <FormInput>
                <LocaleText>Locale</LocaleText>
                <Dropdown
                  placeholder={values.localeName}
                  name="locale"
                  data={locale}
                  placeholderStyle={styles.dropdownPlaceholder}
                  renderItem={item => _renderItem(item)}
                  style={styles.dropdown}
                  value={values.localeId}
                  onChange={item => {
                    setFieldValue('localeId', item.id);
                    setFieldValue('localeName', item.name);
                  }}></Dropdown>
              </FormInput>
              <FormInput>
                <FormButton
                  title="Sign In"
                  buttonStyle={styles.formButton}
                  titleStyle={styles.formButtonTitle}
                  onPress={handleSubmit}
                  disabled={!values.email}></FormButton>
              </FormInput>
            </FormGroup>
          )}
        </Formik>
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  formButton: {
    height: 56,
    backgroundColor: '#E82223',
    borderRadius: 12,
  },
  formButtonTitle: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 18,
    fontStyle: 'normal',
  },
  dropdown: {
    marginLeft: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#64738C',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  dropdownPlaceholder: {
    fontSize: 16,
  },
});

export default AccountScreen;
