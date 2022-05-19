import React, {useEffect} from 'react';
import Navigation from './src/Navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000)
    })
  return (
    <Navigation />
  )

}
export default App;
