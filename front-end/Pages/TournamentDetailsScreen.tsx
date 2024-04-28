import React from 'react';
import { VStack, Box, Text, Button, FlatList, Center } from 'native-base';

const TournamentDetailsScreen = () => {
  const tournamentName = 'Convergent Stock Challenge';
  const userPortfolioValue = '$6,340';
  const userStocks = [
    { id: '1', symbol: 'AAPL', shares: 10, price: '$135.50' },
    { id: '2', symbol: 'MSFT', shares: 5, price: '$242.21' },
    { id: '3', symbol: 'TSLA', shares: 2, price: '$688.99' },
  ];
  const leaderboardData = [
    { id: '1', username: 'TraderJoe', value: '$5,250' },
    { id: '2', username: 'StockMaster', value: '$4,800' },
    { id: '3', username: 'EquityQueen', value: '$4,500' },
    { id: '4', username: 'Ben', value: '$6,340' }, // Ben's data, which will be adjusted to the correct rank below
  ];

  // Sort by portfolio value in descending order and assign ranks
  leaderboardData.sort((a, b) => parseFloat(b.value.replace(/[$,]/g, '')) - parseFloat(a.value.replace(/[$,]/g, '')));
  leaderboardData.forEach((participant, index) => {
    participant.rank = index + 1; // Assigning rank starting from 1
  });

  const renderStockItem = ({ item }) => (
    <Box borderBottomWidth={1} borderBottomColor="gray.300" py={2} px={4} my={2}>
      <Text color="coolGray.800">{item.symbol} - {item.shares} Shares @ {item.price}</Text>
    </Box>
  );

  const renderLeaderboardItem = ({ item, index }) => (
    <Box
      bg={item.username === 'Ben' ? 'purple.100' : 'white'}
      py={2} px={4} my={2}
    >
      <Text color="coolGray.800" bold={item.username === 'Ben'}>
        {item.rank}. {item.username} - Portfolio Value: {item.value}
      </Text>
    </Box>
  );

  return (
    <VStack flex={1} bg="white" space={4} safeArea>
      <Center mb={4}>
        <Text fontSize="xl" fontWeight="bold" color="purple.500">{tournamentName}</Text>
        <Text fontSize="md" color="coolGray.800" py={2}>Your Portfolio Value: {userPortfolioValue}</Text>
        <Button size="sm" colorScheme="purple" variant="solid">
          Manage Portfolio
        </Button>
      </Center>
      <Box mb={4}>
        <Text fontSize="md" fontWeight="bold" color="purple.500">Your Stocks</Text>
        <FlatList
          data={userStocks}
          renderItem={renderStockItem}
          keyExtractor={item => item.id}
        />
      </Box>
      <Center bg="gray.200" height="150px" width="100%" rounded="md" shadow={3} mb={4}>
        <Text color="purple.500" fontWeight="bold">Portfolio Growth Graph</Text>
      </Center>
      <VStack flex={1} width="100%">
        <Text fontSize="md" fontWeight="bold" color="purple.500" px={4}>Leaderboard</Text>
        <FlatList
          data={leaderboardData}
          renderItem={renderLeaderboardItem}
          keyExtractor={item => item.id}
          flex={1}
        />
      </VStack>
    </VStack>
  );
};

export default TournamentDetailsScreen;
