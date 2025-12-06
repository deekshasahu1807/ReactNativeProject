import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'blue',
    lineHeight: 60,
  }
});

type GreetingProps = {
  name: string;
};

const Greeting = (props: GreetingProps) => {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Hello {props.name}!</Text>
    </View>
  );
};

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
      <Greeting name="Roshel" />
      <Greeting name="Jessica" />
      <Greeting name="Veronica" />
    </View>
  );
};

export default LotsOfGreetings;