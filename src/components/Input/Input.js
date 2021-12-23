import React from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from './Input.styles'
function Input({placeholder,onType,value,iconName,isSecure}) {
    return (
        <View style={styles.container}>
             <TextInput style={styles.input} placeholder={placeholder} onChangeText={onType} value={value} secureTextEntry={isSecure}/>
             
        </View>
    )
}

export default Input
