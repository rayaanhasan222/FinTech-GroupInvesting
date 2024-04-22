import React from 'react';
import {VStack, Input, IconButton, Box, FlatList, Text} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'native-base';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ThreadListScreen = ({navigation}) => {
  const theme = useTheme();
  const gray400 = theme.colors.gray[400];

  type threadsEntry = {
    id: string;
    title: string;
    description: string;
    replies: string[];
  };

  const threads = [
    {id: '1', title: 'Thread 1', description: 'Description 1', replies: ["Rohit", "Aiden"]},
    {id: '2', title: 'Thread 2', description: 'Description 2', replies: []},
    {id: '3', title: 'Thread 3', description: 'Description 3', replies: []},
  ];

  const handleThreadClick = (item) => {
    navigation.navigate('ThreadDetails', {item})
  }

  const renderItem = ({item}: {item: threadsEntry}) => (
    <TouchableOpacity onPress={() => handleThreadClick(item)}>
      <Box borderWidth={1} borderColor="gray.300" p={5} my={2} borderRadius="md">
        <Text color="gray.800">{item.title}</Text>
        <Text fontSize={11}>{item.description}</Text>
      </Box>
    </TouchableOpacity>
  );

  return (
    // <NativeBaseProvider>
    //   <NavigationContainer independent={true}>
    <VStack flex={1} bg="white" space={4} alignItems="center" safeArea p={4}>
      <Input
        placeholder="Search"
        width="100%"
        borderRadius="10"
        py={3}
        px={3}
        borderWidth={0}
        InputLeftElement={<Icon name="search" size={20} color={gray400} />}
      />

      <IconButton
        icon={<Icon name="create-outline" color="white" size={20} />}
        borderRadius="full"
        _icon={{
          color: 'white',
        }}
        _pressed={{
          bg: 'violet.600:alpha.20',
        }}
        bg="violet.500"
        onPress={() => console.log('Ask a question')}
      />

      <FlatList
        data={threads}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        width="100%"
      />
    </VStack>
    //   </NavigationContainer>
    // </NativeBaseProvider>
  );
};

export default ThreadListScreen;
