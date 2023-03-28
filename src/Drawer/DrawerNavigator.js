import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from './Main';
import About from './About';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={Main} options={{headerShown:false}} />
      <Drawer.Screen name='About' component={About}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigator