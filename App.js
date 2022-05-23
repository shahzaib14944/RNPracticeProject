import React, {useEffect} from 'react';
import Navigation from './src/Navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  scopes: ['email', 'profile'],
  webClientId:
    '2005214080-ttartoi434fm4ckdq623k1e6sdtcncbn.apps.googleusercontent.com',
});

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  });
  return <Navigation />;
};
export default App;
