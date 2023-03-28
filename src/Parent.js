import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DrawerNavigator from './Drawer/DrawerNavigator'

const Parent = () => {
  return (
    <View style={{flex:1,backgroundColor:"green"}}>
      <DrawerNavigator/>
    </View>
  )
}

export default Parent