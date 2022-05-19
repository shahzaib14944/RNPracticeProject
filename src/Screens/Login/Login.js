import React, {useEffect, useState, useRef} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
    let data = [
        {id: 1, name: 'md-logo-facebook', size: 50, color: 'blue'},
        {id: 2, name: 'logo-google', size: 50, color: 'black'},
        {id: 3, name: 'logo-twitter', size: 50, color: 'lightblue'}
    ]
    
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <View style ={{flexDirection:'row', width: '100%', justifyContent: 'space-evenly'}}>
            {data.map(item => {
                return (
                    <TouchableOpacity>
                        <Icon name={item.name} size={item.size} color={item.color} />
                    </TouchableOpacity>
                )
            })}
            </View>
            
        </View>
    )
}

export default LoginScreen;