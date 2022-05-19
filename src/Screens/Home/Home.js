import React, {useEffect, useState, useRef} from 'react';
import {Text, View, Alert, ScrollView, Animated} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const HomeScreen = () => {
  const [headerShown, setHeaderShown] = useState(false);
  const scrolling = useRef(new Animated.Value(0)).current;
  const translation = scrolling.interpolate({
    inputRange: [0, 30],
    outputRange: [-100, 0],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);
  return (
    <View style = {{backgroundColor: 'lightgray'}}>
      <View
        style={{
          backgroundColor: 'blue',
          width: '100%',
          height: 50,
          zIndex: 99,
        }}></View>
      <Animated.View style={{backgroundColor: 'lightgray'}}>
          <Animated.View
          style={{
            backgroundColor: 'green',
            width: '100%',
            height: 50,
            transform: [{translateY: translation}],
            color: 'lightgray',
          }}></Animated.View>

      </Animated.View>

      <Animated.ScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrolling,
                },
              },
            },
          ],
          {
            useNativeDriver: true,
          }, // Optional async listener
        )}
        scrollEventThrottle={16}
        style={{flexGrow: 1}}>
        <View style={{flex: 1, marginTop: -20}}>
          <View
            style={{
              backgroundColor: 'lightgray',
              width: '100%',
              height: 500,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 250,
                height: 250,
                backgroundColor: 'black',
                marginTop: 20,
              }}></View>
          </View>
          <View
            style={{
              backgroundColor: 'lightgray',
              width: '100%',
              height: 500,
            }}></View>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default HomeScreen;
