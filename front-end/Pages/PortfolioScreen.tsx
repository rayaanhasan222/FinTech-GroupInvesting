import React from 'react';
import { View, Text, Button } from 'react-native';

const PortfolioScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Portfolio Screen</Text>
      {/* Example button to navigate to Home screen */}
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default PortfolioScreen;
