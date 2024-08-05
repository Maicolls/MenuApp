
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/Screens/HomeScreen';
import ProfileScreen from './src/Screens/ProfileScreenScreen';
import MessageScreen from './src/Screens/MessageScreen';
import MomentsScreen from './src/Screens/MomentsScreen';
import SettingsScreens from './src/Screens/SettingsScreen';
import CustomDrawer from './src/Components/CustomDrawer';


import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator  
      drawerContent={props => <CustomDrawer {...props}/>} 
      screenOptions={{
      headerShown: false,
      drawerActiveBackgroundColor: '#aa18ea', 
      drawerActiveTintColor: '#fff',
      drawerInactiveTintColor: '#333',
      drawerLabelStyle: {
        marginLeft:-25,
        fontFamily: 'Roboto-Medium',
        fontSize: 15
      }}}>
        <Drawer.Screen name="Home" component={HomeScreen} 
        options={{
          drawerIcon: ({color}) =>(
            <Ionicons name="home" size={24} color="color" />
          )
        }}
        />
        <Drawer.Screen name="Perfil" component={ProfileScreen} 
        options={{
          drawerIcon: ({color}) =>(
            <Ionicons name="person-outline" size={24} color="color" />
          )
        }}
        />
        <Drawer.Screen name="Calendario" component={MessageScreen} 
        options={{
          drawerIcon: ({color}) =>(
            <Ionicons name="calendar-number-outline" size={24} color="color" />
          )
        }}
        />
        <Drawer.Screen name="Diario" component={MomentsScreen} 
        options={{
          drawerIcon: ({color}) =>(
            <Ionicons name="reader-outline" size={24} color="color" />
          )
        }}
        />
        <Drawer.Screen name="Lineas Psicologicas" component={SettingsScreens} 
        options={{
          drawerIcon: ({color}) =>(
            <Ionicons name="call-outline" size={24} color="color" />
          )
        }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;