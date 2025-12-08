import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

export default function CounterScreen() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Count: {count}</Text>
      <Button title="+" onPress={() => dispatch({ type: "INCREMENT" })} />
      <Button title="-" onPress={() => dispatch({ type: "DECREMENT" })} />
    </View>
  );
}
