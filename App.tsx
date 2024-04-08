import React from 'react';
import { NativeBaseProvider } from 'native-base';
import HomeScreen from './front-end/Pages/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './front-end/Components/BottomTabNavigator';


const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
