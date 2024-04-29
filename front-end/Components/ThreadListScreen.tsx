import {React, useRef} from 'react';
import {VStack, Input, IconButton, Box, FlatList, Text} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'native-base';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

const ThreadListScreen = ({navigation}) => {
  const theme = useTheme();
  const gray400 = theme.colors.gray[400];

  type threadsEntry = {
    id: number;
    title: string;
    description: string;
    replies: string[];
  };

  let threads = [
    {
      id: 1,
      title: 'Stock Market Trends 2024',
      description: 'Discuss the latest trends affecting the markets this year.',
      replies: ['Alice', 'Bob'],
    },
    {
      id: 2,
      title: 'Cryptocurrency Regulations Update',
      description: 'What the new regulations mean for crypto traders.',
      replies: ['Charlie'],
    },
    {
      id: 3,
      title: 'Real Estate Investment Strategies',
      description: 'Strategies for the current real estate market.',
      replies: ['Dave'],
    },
    {
      id: 4,
      title: 'Global Economic Outlook',
      description: 'Projections and discussions on the global economy.',
      replies: [],
    },
    {
      id: 5,
      title: 'Tech IPOs to Watch in 2024',
      description: 'Upcoming tech IPOs that have investors talking.',
      replies: ['Eve', 'Frank'],
    },
    {
      id: 6,
      title: 'Hedge Fund Insights',
      description: 'Inside look at hedge fund strategies for Q2.',
      replies: ['Grace'],
    },
    {
      id: 7,
      title: 'Commodities Forecast Q2',
      description: 'Predictions for commodity prices this quarter.',
      replies: [],
    },
    {
      id: 8,
      title: 'Tax Planning for Investors',
      description: 'Optimizing your investments for tax season.',
      replies: ['Henry'],
    },
    {
      id: 9,
      title: 'Venture Capital in Biotech',
      description: 'The impact of VC funding on biotech startups.',
      replies: ['Ivy'],
    },
  ];
  

  const handleThreadClick = item => {
    navigation.navigate('ThreadDetails', {item});
  };

  // function newThread() {
  //   let thread: threadsEntry = {
  //     id: threads[(threads.length - 1)].id + 1,
  //     title: 'Thread ' + (threads[(threads.length - 1)].id + 1).toString(),
  //     description: 'Description ' + (threads[(threads.length - 1)].id + 1).toString()},
  //     replies: []
  //   };
  //   threads = threads + threads;
  //   return;
  // };

  const renderItem = ({item}: {item: threadsEntry}) => (
    <TouchableOpacity onPress={() => handleThreadClick(item)}>
      <Box
        borderWidth={1}
        borderColor="gray.300"
        p={5}
        my={2}
        borderRadius="md">
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
        onPress={() => console.log("New Thread")}
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
