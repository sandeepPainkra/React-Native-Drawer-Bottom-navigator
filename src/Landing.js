import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Landing = ({navigation}) => {
    useEffect(()=>{
          setTimeout(()=>{
                navigation.navigate("Parent")
          },2000)
    },[])
  return (
    <SafeAreaView>
      <Text>Landing</Text>
    </SafeAreaView>
  )
}

export default Landing