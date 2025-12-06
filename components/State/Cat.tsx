import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

type catProps = {
    name: string;
};

const Cat = (props: catProps) => {
    const [isHungry, setIsHungry] = React.useState(true);

    return (
        <View style={{margin:10}}>
            <Text>I am {props.name}, I'm {isHungry ? 'hungry' : 'full'} !!!</Text>
            <Button onPress={() => setIsHungry(!isHungry)} title={isHungry ? 'Feed me' : 'Thank you!'} disabled={!isHungry} />
        </View>
    );
};

const Cafe = () => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 30, fontWeight: 'semibold'}}>This is Cat's Cafe.</Text>
            <Cat name="Simba" />
            <Cat name="Kitty" />
        </View>
    );
};

export default Cafe;