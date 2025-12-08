import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Own Route import
import LotsOfGreetings from '../Props/LotsOfGreetings';
import Counter from '../State/Counter';
import Cat from '../State/Cat';
import SearchWithPagination from '../FlatList/SearchWithPagination';

type RootStackParamList = {
  Home: undefined;
  LotsOfGreetings: {name: string} | undefined;
  Counter: undefined;
  Cat: undefined;
  SearchWithPagination: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen({ navigation }: any) {
  const menuData = [
    {
      key: '1',
      title: 'Greetings Page',
      navigateTo: 'LotsOfGreetings',
    },
    {
      key: '2',
      title: 'Counter Screen',
      navigateTo: 'Counter',
    },
    {
      key: '3',
      title: 'Cat Screen',
      navigateTo: 'Cat',
    },
    {
      key: '4',
      title: 'Search With Page',
      navigateTo: 'SearchWithPagination',
    },
  ]; // Dummy data for FlatList

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>Home Screen</Text>
      <FlatList 
        keyExtractor={item => item.key}
        data={menuData}
        renderItem={({item}) => (
          <View style={{marginTop: 20}}>
            <Button title={item.title} onPress={() => navigation.navigate(`${item.navigateTo}`)} />
          </View>
        )}
      />
    </View>
  );
}

function DetailsScreen({ route }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen — id: {route.params?.id}</Text>
    </View>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* LotsOfGreetings */}
        <Stack.Screen
          name="LotsOfGreetings"
          component={LotsOfGreetings}
          options={{ title: 'Greetings Page' }} // alternate header title
        />
        {/* Counter */}
        <Stack.Screen
          name="Counter"
          component={Counter}
          options={{ title: 'Counter' }}
        />
        {/* Cat */}
        <Stack.Screen
          name="Cat"
          component={Cat}
          options={{ title: 'Cat' }}
        />
        {/* SearchWithPagination */}
        <Stack.Screen
          name="SearchWithPagination"
          component={SearchWithPagination}
          options={{ title: 'Search With Pagination' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}