import React from "react";
import { View, Text, Platform } from "react-native";

export default function PlatformUI() {
  return (
    <View style={{ padding: 20 }}>
      {Platform.OS === "ios" ? (
        <Text>Running on iOS 🍎</Text>
      ) : (
        <Text>Running on Android 🤖</Text>
      )}
    </View>
  );
}
