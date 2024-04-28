import React, { useState } from 'react';
import { VStack, Box, Text, Button, FlatList, Pressable } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const LeaderboardScreen = () => {
  const navigation = useNavigation();

  const [tournaments, setTournaments] = useState([
    {
      id: '1',
      name: 'Convergent Stock Challenge',
      buyIn: '$10',
      prizes: ['$500', '$250', '$100'],
      duration: '90 days',
      participants: 25,
      joined: false,
    },
    {
      id: '2',
      name: 'Spring Stock Sprint',
      buyIn: '$50',
      prizes: ['$1500', '$1000', '$500'],
      duration: '30 days',
      participants: 12,
      joined: false,
    },
    {
      id: '3',
      name: 'Equities Race',
      buyIn: '$20',
      prizes: ['$750', '$500', '$250'],
      duration: '60 days',
      participants: 43,
      joined: false,
    },
    {
      id: '4',
      name: 'Investment Marathon',
      buyIn: '$100',
      prizes: ['$3000', '$2000', '$1000'],
      duration: '120 days',
      participants: 96,
      joined: false,
    },
    // Add more tournaments as needed
  ]);

  const handleJoinTournament = (tournamentId) => {
    setTournaments(currentTournaments =>
      currentTournaments.map(tournament =>
        tournament.id === tournamentId
          ? { ...tournament, joined: !tournament.joined, participants: tournament.joined ? tournament.participants - 1 : tournament.participants + 1 }
          : tournament,
      ),
    );
  };

  const navigateToTournamentDetails = (tournamentId) => {
    navigation.navigate('TournamentDetails', { tournamentId });
  };

  const renderItem = ({ item }) => (
    <Pressable onPress={() => navigateToTournamentDetails(item.id)} _pressed={{ bg: 'coolGray.200' }}>
      <Box borderWidth={1} borderColor="gray.300" p={4} my={2} borderRadius="md" bg="gray.100">
        <Text color="coolGray.800" bold fontSize="lg">{item.name}</Text>
        <Text>Buy-in: {item.buyIn}</Text>
        <Text>Prizes: {item.prizes.join(', ')}</Text>
        <Text>Duration: {item.duration}</Text>
        <Text>Participants: {item.participants}</Text>
        {item.joined ? (
          <Button size="sm" mt={2} colorScheme="purple" variant="outline">
            Manage Portfolio
          </Button>
        ) : (
          <Button size="sm" mt={2} colorScheme="purple" onPress={() => handleJoinTournament(item.id)}>
            Join Tournament
          </Button>
        )}
      </Box>
    </Pressable>
  );

  return (
    <VStack flex={1} bg="white" space={4} alignItems="center" safeArea p={4}>
      <Text fontSize="xl" fontWeight="bold" color="purple.500">Tournaments</Text>
      <FlatList
        data={tournaments}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        width="100%"
      />
    </VStack>
  );
};

export default LeaderboardScreen;
