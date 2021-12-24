import React from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from './Input.styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
function Input({placeholder,onType,value,iconName,isSecure,onChangeText}) {
    return (
        <View style={styles.container}>
             <TextInput style={styles.input} placeholder={placeholder} onChangeText={onType} value={value} secureTextEntry={isSecure} onChangeText={onChangeText}/>
             <MaterialCommunityIcons name={iconName} size={24} color="#CD1818" />
        </View>
    )
}

export default Input
