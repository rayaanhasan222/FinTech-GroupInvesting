import { FlatList } from 'native-base';
import React from 'react';
import { View, Text } from 'react-native';

const ThreadDetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View>
      <Text>Item Details:</Text>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );
};

export default ThreadDetailsScreen;
