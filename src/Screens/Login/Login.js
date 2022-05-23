import React, {useEffect, useState, useRef} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import {LoginManager} from 'react-native-fbsdk-next';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const LoginScreen = ({navigation}) => {
  let data = [
    {
      id: 1,
      name: 'md-logo-facebook',
      size: 50,
      color: 'blue',
      onPress: () => faceBookLogin,
    },
    {
      id: 2,
      name: 'logo-google',
      size: 50,
      color: 'black',
      onPress: () => googleLogin,
    },
    {
      id: 3,
      name: 'logo-twitter',
      size: 50,
      color: 'lightblue',
      onPress: () => {},
    },
  ];

  async function googleLogin() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo, "userInfo")
      navigation.navigate('Home')
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
        console.log(error,"e")
      }
    }
  }

  function faceBookLogin() {
    LoginManager.logInWithPermissions(['public_profile']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
          navigation.navigate('Home');
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  }

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-evenly',
        }}>
        {data.map(item => {
          return (
            <TouchableOpacity onPress={item.onPress()}>
              <Icon name={item.name} size={item.size} color={item.color} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default LoginScreen;
