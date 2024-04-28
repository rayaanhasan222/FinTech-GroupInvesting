import React from 'react';
import { VStack, Text, Center, Box, ScrollView, HStack, Avatar, Icon } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const HomeScreen = () => {

  // Dummy stock data with an additional 'trend' field
  const stockData = [
    { id: '1', name: 'AAPL', shares: 15, shareValue: 145, trend: 'up' },
    { id: '2', name: 'GOOGL', shares: 5, shareValue: 2800, trend: 'down' },
    { id: '3', name: 'AMZN', shares: 2, shareValue: 3300, trend: 'up' },
    { id: '4', name: 'MSFT', shares: 10, shareValue: 290, trend: 'up' },
    { id: '5', name: 'TSLA', shares: 8, shareValue: 720, trend: 'down' },
    { id: '6', name: 'META', shares: 20, shareValue: 200, trend: 'up' },
  ];

  // Function to calculate the total value of shares
  const calculateTotalValue = (shares, shareValue) => {
    return (shares * shareValue).toLocaleString(undefined, {
      style: 'currency',
      currency: 'USD',
    });
  };

  // Decide the color based on the stock trend
  const getTrendColor = (trend) => {
    return trend === 'up' ? 'green.500' : 'red.500';
  };

  return (
    <Box safeArea flex={1} bg="white">
      <VStack space={5} alignItems="center" px={5}>
        <Text fontSize="2xl" fontWeight="bold" color="purple.500" pt={5}>Home page</Text>

        <HStack space={3} alignItems="center">
          <Avatar bg="purple.500" size="md" source={{ uri: 'https://via.placeholder.com/150' }} />
          <Text color="black" fontSize="lg" fontWeight="medium">Welcome back, Ben!</Text>
        </HStack>

        <Center w="100%" bg="gray.100" rounded="md" shadow={3} p={5} mt={5}>
          <Text color="gray.600" fontWeight="medium">Your Master Portfolio</Text>
        </Center>

        <VStack space={4} w="100%" mt={5}>
          <Text fontSize="xl" fontWeight="bold" color="purple.500">Stocks</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {stockData.map(stock => (
              <Box key={stock.id} bg="gray.50" rounded="lg" shadow={1} p={4} my={2}>
                <HStack justifyContent="space-between" alignItems="center">
                  <Text fontSize="md" color="coolGray.800" bold>{stock.name}</Text>
                  <HStack alignItems="center">
                    <Icon
                      as={<MaterialIcons name={stock.trend === 'up' ? 'arrow-upward' : 'arrow-downward'} />}
                      size={5}
                      ml={1}
                      color={getTrendColor(stock.trend)}
                    />
                    <Text fontSize="xs" color={getTrendColor(stock.trend)} fontWeight="medium">
                      {stock.trend === 'up' ? 'Rising' : 'Falling'}
                    </Text>
                  </HStack>
                </HStack>
                <HStack justifyContent="space-between" mt={3}>
                  <Text color="coolGray.600">{stock.shares} Shares</Text>
                  <Text color="coolGray.800" fontWeight="medium">{calculateTotalValue(stock.shares, stock.shareValue)}</Text>
                </HStack>
              </Box>
            ))}
          </ScrollView>
        </VStack>
      </VStack>
    </Box>
  );
};

export default HomeScreen;