import { View, Text, Button } from "react-native";
import React from "react";

const Screen1 = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" ,backgroundColor:"green" }}>
      <Text>Screen1</Text>
      <Button title="Open Drawer" onPress={()=>{
        navigation.openDrawer()
      }} />
    </View>
  );
};

export default Screen1;
