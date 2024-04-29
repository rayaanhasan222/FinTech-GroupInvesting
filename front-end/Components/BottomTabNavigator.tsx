import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Pages/HomeScreen';
import LeaderboardScreen from '../Pages/LeaderboardScreen';
import TournamentDetailsScreen from '../Pages/TournamentDetailsScreen';
import TradeSectionScreen from '../Pages/TradeSectionScreen';
import ForumPageScreen from '../Pages/ForumScreen';
import PersonalPortfolioScreen from '../Pages/PersonalPortfolioScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const LeaderboardStack = createNativeStackNavigator();

const LeaderboardStackNavigator = () => {
  return (
    <LeaderboardStack.Navigator>
      <LeaderboardStack.Screen
        name="Tournaments"
        component={LeaderboardScreen}
        options={{headerShown: false}}
      />
      <LeaderboardStack.Screen
        name="TournamentDetails"
        component={TournamentDetailsScreen}
        options={{headerShown: false}}
      />
    </LeaderboardStack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Tournaments') {
            iconName = focused ? 'podium' : 'podium-outline';
          } else if (route.name === 'Trade') {
            iconName = focused ? 'trending-up' : 'trending-up-outline';
          } else if (route.name === 'Forum') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'Portfolio') {
            iconName = focused ? 'briefcase' : 'briefcase-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Tournaments"
        component={LeaderboardStackNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Trade"
        component={TradeSectionScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Forum"
        component={ForumPageScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Portfolio"
        component={PersonalPortfolioScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
