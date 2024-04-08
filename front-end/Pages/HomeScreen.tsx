import React from 'react';
import { VStack, Text, Center, Box, Input, IconButton, HStack, Avatar, ScrollView } from 'native-base';

const HomeScreen = () => {
  return (
    <Box safeArea flex={1} bg="white">
      <VStack space={5} alignItems="center">
        <Text fontSize="2xl" fontWeight="bold" color="purple.500" pt={5}>Home page</Text>

        <HStack space={3} alignItems="center">
          <Avatar bg="purple.500" size="sm" source={{ uri: 'https://via.placeholder.com/150' }} />
          <Text color="black" fontSize="md">Welcome back User!</Text>
        </HStack>

        <Center w="100%" h={20} bg="gray.200" rounded="md" shadow={3}>
          <Text>Your portfolio</Text>
        </Center>

        <VStack space={2} w="100%" px={5}>
          <Text fontSize="lg" bold>Stocks</Text>
          <ScrollView>
            <Box h={20} bg="gray.200" rounded="md" shadow={2} my={2}>
              <Text>Stock Item 1</Text>
            </Box>
            <Box h={20} bg="gray.200" rounded="md" shadow={2} my={2}>
              <Text>Stock Item 2</Text>
            </Box>
            <Box h={20} bg="gray.200" rounded="md" shadow={2} my={2}>
              <Text>Stock Item 3</Text>
            </Box>
            <Box h={20} bg="gray.200" rounded="md" shadow={2} my={2}>
              <Text>Stock Item 4</Text>
            </Box>
            <Box h={20} bg="gray.200" rounded="md" shadow={2} my={2}>
              <Text>Stock Item 5</Text>
            </Box>
            <Box h={20} bg="gray.200" rounded="md" shadow={2} my={2}>
              <Text>Stock Item 6</Text>
            </Box>
          </ScrollView>
        </VStack>
      </VStack>
    </Box>
  );
};

export default HomeScreen;
