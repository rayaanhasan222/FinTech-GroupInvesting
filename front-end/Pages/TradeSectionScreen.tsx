import React from 'react';
import { VStack, Text, Button, HStack, AspectRatio, Box, Center, IconButton } from 'native-base';
import { LineChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const TradeSectionScreen = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 100, 50, 20, 10, 99, 48],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2
      }
    ],
    legend: ["Stock Price"]
  };

  const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
  };

  return (
    <VStack space={5} alignItems="center" bg="white" flex={1} safeArea p={4}>
      <Text color="violet.800" fontSize="xl" bold>Amazon (AMZN)</Text>
      <HStack space={2} alignItems="center">
        <Icon name="storefront" size={30} color="#c6c6c6" />
        <VStack>
          <Text fontSize="2xl" bold>178.90 USD</Text>
          <Text fontSize="xs" color="red.600">-1.41 (-0.78%)</Text>
        </VStack>
      </HStack>
      <HStack space={4} alignItems="center">
        <Button size="sm" colorScheme="purple" >Buy</Button>
        <Button size="sm" variant="outline" colorScheme="purple" >Sell</Button>
      </HStack>
      <HStack space={2} alignItems="center">
        <Button size="xs" variant="subtle">1D</Button>
        <Button size="xs" variant="subtle">1W</Button>
        <Button size="xs" variant="subtle">1M</Button>
        <Button size="xs" variant="subtle">6M</Button>
        <Button size="xs" variant="subtle">1Y</Button>
        <Button size="xs" variant="subtle">YTD</Button>
      </HStack>
      <Box width="100%" height={200}>
        <LineChart
          data={data}
          width={screenWidth}
          height={200}
          chartConfig={chartConfig}
          bezier
        />
      </Box>
    </VStack>
  );
};

export default TradeSectionScreen;

