import React from 'react';
import { View, 
  Text, 
  Image, 
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { 
  DrawerContentScrollView, 
  DrawerItemList,
  DrawerItem
 } from '@react-navigation/drawer';

 import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#8200d6' }}>
        <ImageBackground source={require('../Imagenes/Fondo.jpg')} style={{ width: undefined, padding: 16, paddingTop: 48 }}>
          <Image source={require('../Imagenes/Maincra.jpg')} style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 10 }} />
          <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Roboto-Regular' }}>Michotitorico</Text>
        </ImageBackground>
        <View style={{flex:1, backgroundColor:'#fff', padding:10 }}>
        <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding:20, borderTopWidth:1, borderTopColor:'#ccc'}}>
        <TouchableOpacity onPress={() =>{}} style={{paddingVertical:15}}>
        <Ionicons name="log-out" size={22}/>
        <Text
        style={{
          fontSize:15,
          fontFamily:'Roboto-Medium',
          marginLeft: 5
        }}
        >
          Cerrar Sesión
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CustomDrawer; 