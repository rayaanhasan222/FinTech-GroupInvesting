// LeaderboardScreen.tsx
import React from 'react';
import { VStack, Box, Text, FlatList } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'; // Ensure you have installed react-native-vector-icons

const LeaderboardScreen = () => {

    type LeaderboardEntry = {
        id: string;
        name: string;
        score: string;
      };
  // Dummy data for the leaderboard
  const leaderboardData: LeaderboardEntry[] = [
    { id: '1', name: 'User 1', score: '5,000' },
    { id: '2', name: 'User 2', score: '4,500' },
    { id: '3', name: 'User 3', score: '4,000' },
    // ... more entries
  ];

  const renderItem = ({ item }: { item: LeaderboardEntry}) => (
    <Box borderWidth={1} borderColor="gray.300" p={4} my={2} borderRadius="md" bg="gray.100">
      <Text color="gray.800">{item.name} - {item.score} Points</Text>
    </Box>
  );

  return (
    <VStack flex={1} bg="white" space={4} alignItems="center" safeArea p={4}>
      {/* Leaderboard Chart Placeholder */}
      <Box width="100%" height={200} bg="gray.200" mb={4} justifyContent="center" alignItems="center">
        <Text fontSize="lg" bold>
          Leaderboard Chart
        </Text>
        {/* This is where your actual bar chart component would go */}
      </Box>

      {/* Leaderboard Entries */}
      <FlatList
        data={leaderboardData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        width="100%"
      />

      {/* Bottom navigator placeholder */}
      {/* ... your bottom navigator goes here ... */}
    </VStack>
  );
};

export default LeaderboardScreen;
