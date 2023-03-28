import { View, Text, Button } from "react-native";
import React from "react";

const Screen3 = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" ,backgroundColor:"blue" }}>
      <Text>Screen3</Text>
      <Button
        title="Open Drawer"
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    </View>
  );
};

export default Screen3;
