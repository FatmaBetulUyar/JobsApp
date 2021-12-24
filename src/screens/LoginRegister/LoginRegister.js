import React, { useState, useEffect } from "react";
import {SafeAreaView,Text, StyleSheet,View,Alert,Image,Dimensions,} from "react-native";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,} from "firebase/auth";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { firebaseAuth, firestoreDb } from "../../FirebaseConfig";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

export default function LoginRegister(props) {
  const { setAuth } = props;
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginScreen, setIsLoginScreen] = useState(true);

  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    return token;
  }

  const loginHandle = async () => {
    signInWithEmailAndPassword(firebaseAuth, mail, password)
      .then(async (userCredential) => {
        registerForPushNotificationsAsync().then(async (token) => {
          await setDoc(doc(firestoreDb, "userData", mail), {
            expoToken: token,
          });

          Alert.alert("Good Job!", "Giriş Yapma Başarılı!", [
            { text: "OK", onPress: () => setAuth(true) },
          ]);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message.replace("Firebase:", "");
        Alert.alert(errorCode, errorMessage, [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      });
  };

  const registerHandle = async () => {
    createUserWithEmailAndPassword(firebaseAuth, mail, password)
      .then((userCredential) => {
        Alert.alert("Good Job!", "Kayıt Başarılı!", [
          { text: "OK", onPress: () => setIsLoginScreen(true) },
        ]);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message.replace("Firebase:", "");
        Alert.alert(errorCode, errorMessage, [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      });
  };

  const styles = StyleSheet.create({
    imageButton: {
      marginTop: 10,
    },

    logo: {
      width: Dimensions.get("window").width * 0.6,
      height: Dimensions.get("window").height / 5,
      resizeMode: "contain",
      alignSelf: "center",
      margin: 50,
      marginBottom: 60,
    },
  });

  return isLoginScreen == true ? (
    <SafeAreaView>
      <Image
        style={styles.logo}
        source={require("../../../assets/icons/joblogo.png")}
      />
      <Input
        onChangeText={setMail}
        value={mail}
        placeholder="Email adresi"
        autoCapitalize="none"
        iconName="account"
      />
      <Input
        onChangeText={setPassword}
        value={password}
        placeholder="Şifre"
        secureTextEntry={true}
        autoCapitalize="none"
        iconName="key"
        isSecure
      />
      <Button onPress={loginHandle} text="Login" accessibilityLabel="Login" />
      <Button
        onPress={() => setIsLoginScreen(false)}
        text="Register"
        accessibilityLabel="Register"
      />
    </SafeAreaView>
  ) : (
    <SafeAreaView>
      <Image
        style={styles.logo}
        source={require("../../../assets/icons/joblogo.png")}
      />

      <Input
        onChangeText={setMail}
        value={mail}
        placeholder="Email adresi"
        autoCapitalize="none"
        iconName="account"
      />
      <Input
        onChangeText={setPassword}
        value={password}
        placeholder="Şifre"
        secureTextEntry={true}
        autoCapitalize="none"
        iconName="key"
        isSecure
      />
      <Button
        onPress={registerHandle}
        text="Register"
        accessibilityLabel="Register"
      />
      <Button
        onPress={() => setIsLoginScreen(true)}
        text="Login"
        accessibilityLabel="Login"
      />
    </SafeAreaView>
  );
}
