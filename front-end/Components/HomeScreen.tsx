import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      {/* Example button to navigate to Portfolio screen */}
      <Button
        title="Go to Portfolio"
        onPress={() => navigation.navigate('Portfolio')}
      />
    </View>
  );
};

export default HomeScreen;