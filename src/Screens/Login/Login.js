import React, {useEffect, useState, useRef} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import { LoginManager } from "react-native-fbsdk-next";

const LoginScreen = ({navigation}) => {
    let data = [
        {id: 1, name: 'md-logo-facebook', size: 50, color: 'blue', onPress: () => faceBookLogin},
        {id: 2, name: 'logo-google', size: 50, color: 'black', onPress: () => {}},
        {id: 3, name: 'logo-twitter', size: 50, color: 'lightblue', onPress: () => {}}
    ]

    function faceBookLogin() {
        LoginManager.logInWithPermissions(["public_profile"]).then(
            function(result) {
              if (result.isCancelled) {
                console.log("Login cancelled");
              } else {
                console.log(
                  "Login success with permissions: " +
                    result.grantedPermissions.toString()
                );
                navigation.navigate('Home')
              }
            },
            function(error) {
              console.log("Login fail with error: " + error);
            }
          );
    }
    
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <View style ={{flexDirection:'row', width: '100%', justifyContent: 'space-evenly'}}>
            {data.map(item => {
                return (
                    <TouchableOpacity onPress={item.onPress()}>
                        <Icon name={item.name} size={item.size} color={item.color} />
                    </TouchableOpacity>
                )
            })}
            </View>
            
        </View>
    )
}

export default LoginScreen;