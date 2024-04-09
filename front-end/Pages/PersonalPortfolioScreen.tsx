import React from 'react';
import { VStack, HStack, Box, Text, FlatList, Divider, Heading, Badge } from 'native-base';

type portfolioEntry = {
  id: string;
  symbol: string;
  amount: number;
  value: string;
}

// Dummy data for the portfolio
const portfolioData = [
  { id: '1', symbol: 'AMZN', amount: 10, value: '$3300.00' },
  { id: '2', symbol: 'AAPL', amount: 20, value: '$3000.00' },
  { id: '3', symbol: 'GOOGL', amount: 5, value: '$7200.00' },
  // ... add more stocks as needed
];

const PersonalPortfolioScreen = () => {
  const renderItem = ({ item }: {item: portfolioEntry}) => (
    <Box>
      <VStack space={2} my={2}>
        <HStack justifyContent="space-between">
          <Text fontSize="md" bold>{item.symbol}</Text>
          <Badge colorScheme="success" _text={{ color: 'white' }}>
            {item.amount} Shares
          </Badge>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color="gray.500">Current Value</Text>
          <Text color="gray.800">{item.value}</Text>
        </HStack>
      </VStack>
      <Divider my="2" />
    </Box>
  );

  return (
    <VStack flex={1} bg="white" safeArea p={4}>
      <Heading size="md" my="4">Your Stocks</Heading>
      <FlatList
        data={portfolioData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Divider />}
      />
    </VStack>
  );
};

export default PersonalPortfolioScreen;
