import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./front-end/Pages/HomeScreen.tsx";
import PortfolioScreen from "./front-end/Pages/PortfolioScreen.tsx";
import { enableScreens } from 'react-native-screens';

enableScreens();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <Text style={styles.welcomeMessage}>Welcome back, User!</Text>

        {/* Portfolio Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Your portfolio</Text>
          {/* Portfolio stuff here */}
        </View>

        {/* Stocks Section */}
        <View style={styles.stocksSection}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            // Add onChangeText event to handle search functionality
          />
          {/* Stocks stuff here */}
        </View>
      </ScrollView>

      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Portfolio" component={PortfolioScreen} />
      </Tab.Navigator>
    </NavigationContainer>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  welcomeMessage: {
    margin: 20,
    fontSize: 22,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#EDE7F6',
    borderRadius: 8,
    padding: 20,
    margin: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  stocksSection: {
    padding: 20,
  },
  searchInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#9C27B0',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
});

export default App;
