import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native";

const Screen2 = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <Text>Screen2</Text>
      <Button
        title="Open Drawer"
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    </View>
  );
};

export default Screen2;
