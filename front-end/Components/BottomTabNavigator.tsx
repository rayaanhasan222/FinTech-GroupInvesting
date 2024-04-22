import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Pages/HomeScreen';
import LeaderboardScreen from '../Pages/LeaderboardScreen';
import TradeSectionScreen from '../Pages/TradeSectionScreen';
import ForumPageScreen from '../Pages/ForumScreen';
import PersonalPortfolioScreen from '../Pages/PersonalPortfolioScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "help-circle";

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Leaderboard':
              iconName = focused ? 'podium' : 'podium-outline';
              break;
            case 'Trade':
              iconName = focused ? 'trending-up' : 'trending-up-outline';
              break;
            case 'Forum':
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
              break;
            case 'Portfolio':
              iconName = focused ? 'briefcase' : 'briefcase-outline';
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Leaderboard" component={LeaderboardScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Trade" component={TradeSectionScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Forum" component={ForumPageScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Portfolio" component={PersonalPortfolioScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
