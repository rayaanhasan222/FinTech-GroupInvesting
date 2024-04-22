import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ThreadNavigator from '../Components/ThreadNavigator';
import {NativeBaseProvider} from 'native-base';
import ThreadListScreen from '../Components/ThreadListScreen';
import ThreadDetailsScreen from '../Components/ThreadDetailsScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const ForumScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Threads"
        component={ThreadListScreen}
        options={{title: 'Forum'}}
      />
      <Stack.Screen
        name="ThreadDetails"
        component={ThreadDetailsScreen}
        options={{title: ''}}
      />
    </Stack.Navigator>
  );
};

export default ForumScreen;
