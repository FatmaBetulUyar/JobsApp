import React, { useCallback } from 'react'
import { Alert,  Linking, StyleSheet, View } from "react-native";
import Button from '../Button/Button'

const SubmitButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
    return <Button text={children} onPress={handlePress} />;
  };
  

export default SubmitButton
