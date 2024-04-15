// import React from 'react';
// import { VStack, Text, Button, HStack, AspectRatio, Box, Center, IconButton } from 'native-base';
// import { LineChart } from 'react-native-chart-kit';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Dimensions } from 'react-native';

// const screenWidth = Dimensions.get('window').width;

// const TradeSectionScreen = () => {
//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
//     datasets: [
//       {
//         data: [20, 45, 28, 80, 99, 43, 100, 50, 20, 10, 99, 48],
//         color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
//         strokeWidth: 2
//       }
//     ],
//     legend: ["Stock Price"]
//   };

//   const chartConfig = {
//     backgroundGradientFrom: 'white',
//     backgroundGradientTo: 'white',
//     color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//     strokeWidth: 2,
//   };

//   return (
//     <VStack space={5} alignItems="center" bg="white" flex={1} safeArea p={4}>
//       <Text color="violet.800" fontSize="xl" bold>Amazon (AMZN)</Text>
//       <HStack space={2} alignItems="center">
//         <Icon name="storefront" size={30} color="#c6c6c6" />
//         <VStack>
//           <Text fontSize="2xl" bold>178.90 USD</Text>
//           <Text fontSize="xs" color="red.600">-1.41 (-0.78%)</Text>
//         </VStack>
//       </HStack>
//       <HStack space={4} alignItems="center">
//         <Button size="sm" colorScheme="purple" >Buy</Button>
//         <Button size="sm" variant="outline" colorScheme="purple" >Sell</Button>
//       </HStack>
//       <HStack space={2} alignItems="center">
//         <Button size="xs" variant="subtle">1D</Button>
//         <Button size="xs" variant="subtle">1W</Button>
//         <Button size="xs" variant="subtle">1M</Button>
//         <Button size="xs" variant="subtle">6M</Button>
//         <Button size="xs" variant="subtle">1Y</Button>
//         <Button size="xs" variant="subtle">YTD</Button>
//       </HStack>
//       <Box width="100%" height={200}>
//         <LineChart
//           data={data}
//           width={screenWidth}
//           height={200}
//           chartConfig={chartConfig}
//           bezier
//         />
//       </Box>
//     </VStack>
//   );
// };

// export default TradeSectionScreen;

import React, { useState } from 'react';
import { VStack, Input, Button, Text } from 'native-base';
import axios from 'axios';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

import { CandlestickChart } from 'react-native-wagmi-charts';

const screenWidth = Dimensions.get('window').width;

type ChartDataType = {
  labels: string[];
  datasets: {
    data: number[];
  }[];
};

// "?" means the values are optional
type CompanyOverviewType = {
  name?: string;
  description?: string;
  sector?: string;
}

const TradeSectionScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [chartData, setChartData] = useState<ChartDataType>({ labels: [], datasets: [{ data: [] }] });
  const [companyOverview, setCompanyOverview] = useState<CompanyOverviewType>({});

  const fetchStockData = async () => {
    try {
      const encodedQuery = encodeURIComponent(searchQuery);
      const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${encodedQuery}&interval=5min&apikey=WLDE9KIF8P2GF82Y`);
      const series = response.data["Time Series (5min)"];
      const formattedData = Object.keys(series).slice(0, 50).map(time => parseFloat(series[time]['4. close'])).reverse();

      setChartData({
        labels: Object.keys(series).slice(0, 50).reverse(),
        datasets: [{ data: formattedData }],
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("Axios Error: ", error.message);
        console.log(error.toJSON());
        if (error.response) {
          console.log("Server response:", error.response.data);
        }
      }
      else {
        console.error('Non Axios Error:', error);
      }
    }
  };

  const fetchCompanyOverviewData = async () => {
    try {
      const encodedQuery = encodeURIComponent(searchQuery);
      const response = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${encodedQuery}&apikey=WLDE9KIF8P2GF82Y`);

      setCompanyOverview({
        name: response.data.Name,
        description: response.data.Description,
        sector: response.data.Sector
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("Axios Error Fetching Company Overview: ", error.message);
      }
      else {
        console.error('Non Axios Error:', error);
      }
    }
  };

  const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
  };

  return (
    <VStack space={4} alignItems="center" bg="white" flex={1} safeArea p={4}>
      <Input 
        placeholder="Enter Stock Symbol (e.g., AAPL)" 
        value={searchQuery}
        onChangeText={setSearchQuery}
        autoCapitalize="characters"
        width="100%"
        mb={2}
      />
    

      <Button onPress={() => {fetchStockData(); fetchCompanyOverviewData();}} colorScheme="blue">Search</Button>
      {chartData.labels.length > 0 && (
        <LineChart
          data={chartData}
          width={screenWidth}
          height={220}
          chartConfig={{
            backgroundGradientFrom: 'white',
            backgroundGradientTo: 'white',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 2,
          }}
        />
      )}

      {/* Display company overview data */}
      {companyOverview.name && (
        <VStack space={2} alignItems="center" mt={4}>
          <Text fontSize="lg" bold>{companyOverview.name}</Text>
          <Text>{companyOverview.description}</Text>
          <Text fontStyle="italic">{companyOverview.sector}</Text>
        </VStack>
      )}
    </VStack>
  );
};

export default TradeSectionScreen;
