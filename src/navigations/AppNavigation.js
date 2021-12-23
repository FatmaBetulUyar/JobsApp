import React, { useState} from 'react'
import {Text,View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' 
import DrawerContainer from "../screens/DrawerContainer/DrawerContainer"
import PushNotification from '../screens/Notification/Notification';
import LoginRegister from '../screens/LoginRegister/LoginRegister';
import Jobs from '../screens/Jobs/Jobs';
import JobDetails from '../screens/Details/Details'
import { connectStorageEmulator } from '@firebase/storage';

const Stack = createStackNavigator();

function MainNavigator() {
  return(
    <Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
          }
      }}
    >
      <Stack.Screen name='Jobs' component={Jobs} />
      <Stack.Screen name='PushNotification' component={PushNotification} />
      <Stack.Screen name='JobDetails' component={JobDetails}/>
    
    </Stack.Navigator>
  )
} 

const Drawer = createDrawerNavigator();

function DrawerStack(props) {
  const {setAuth} = props;
  return(
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      screenOptions={{headerShown: false}}
      drawerContent={({navigation})=> <DrawerContainer setAuth={setAuth} navigation={navigation}/>}
    >
  
      <Drawer.Screen name='Main' component={MainNavigator} /> 
     
      
    </Drawer.Navigator>
  )
} 

 export default function AppContainer() {
  const [auth, setAuth] = useState(false); 

  return(
    auth == true 
    ? <NavigationContainer>
      <DrawerStack setAuth={setAuth}/>
    </NavigationContainer>
    : <LoginRegister setAuth={setAuth}></LoginRegister>
  )
} 
 

console.disableYellowBox = true;