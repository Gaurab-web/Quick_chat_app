import React, {Fragment, useState} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import { Platform } from 'react-native';
import {TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native';
import {View, Text} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../redux/reducer/AuthReducer';

const Login = (props) => {
  const [email, setUser] = useState('');
  const [password, setPass] = useState('');
  const AuthReducer = useSelector(state=> state.AuthReducer);
  console.log('Login Auth: ', AuthReducer);
  const dispatch = useDispatch()

  const handleSubmit = () => {
    let data = {email, password};
    console.log('Data:', data);
    dispatch(loginRequest(data))
    props.navigation.navigate('Home')
  };

  return (
    <Fragment>
      <View>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? 'padding' : undefined}>
          <View
            style={{
              marginTop: 80,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#000',
                fontWeight: '700',
                textAlign: 'center',
                borderBottomWidth: 1,
                marginHorizontal: 65,
                paddingBottom: 15,
                borderBottomColor: '#ccc',
              }}>
              Welcome to Login Page
            </Text>
            <TextInput
              placeholder="Username"
              placeholderTextColor="#aaa"
              onChangeText={newUser => setUser(newUser)}
              style={{
                borderWidth: 1,
                marginHorizontal: 48,
                marginTop: 30,
                paddingHorizontal: 20,
                borderColor: '#ccc',
                borderRadius: 10,
              }}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#aaa"
              onChangeText={newPass => setPass(newPass)}
              style={{
                borderWidth: 1,
                marginHorizontal: 48,
                marginTop: 15,
                paddingHorizontal: 20,
                borderColor: '#ccc',
                borderRadius: 10,
              }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#e555fb',
                alignSelf: 'center',
                marginTop: 20,
                width: 200,
                justifyContent: 'center',
                alignItems: 'center',
                height: 45,
                borderRadius: 10,
              }}
              onPress={handleSubmit}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: '600',
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Fragment>
  );
};

export default Login;
