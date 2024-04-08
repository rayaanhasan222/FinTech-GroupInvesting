import React from 'react';
import { VStack, Input, IconButton, Box, FlatList, Text } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'native-base';

const ForumScreen = () => {
  const theme = useTheme();
  const gray400 = theme.colors.gray[400];

    type threadsEntry = {
        id: string;
        title: string;
    }
  const threads: threadsEntry[] = [
    { id: '1', title: 'Thread 1' },
    { id: '2', title: 'Thread 2' },
    { id: '3', title: 'Thread 3' },
  ];

  const renderItem = ({ item } : {item : threadsEntry }) => (
    <Box borderWidth={1} borderColor="gray.300" p={5} my={2} borderRadius="md">
      <Text color="gray.800">{item.title}</Text>
    </Box>
  );

  return (
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
          color: "white"
        }}
        _pressed={{
          bg: "violet.600:alpha.20"
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
  );
};

export default ForumScreen;
