import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomNavigator from '../BottomDrawer/BottomNavigator'

const Main = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <BottomNavigator/>
    </SafeAreaView>
  )
}

export default Main