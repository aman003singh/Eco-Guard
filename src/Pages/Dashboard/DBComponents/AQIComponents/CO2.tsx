//Imports:
import React from 'react'
import {
  Box,
  Heading,
  HStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Text,
} from '@chakra-ui/react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

//State:
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
)


//Functions:
const generateRandomData = () => {
  return Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) - 1)
}


//Constants:
export const options = {
  responsive: true,
  // plugins: {
  //   title: {
  //     display: false,
  //     text: 'Chart.js Line Chart',
  //   },
  // },
}

const labels = ['12PM', '1PM', '2PM', '3PM', '4PM', '5PM']

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'PM2.5 Levels',
      data: generateRandomData(),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

//Return:
const CO2 = () => {

  return (
    <Box
      p={3}
      m={3}
      borderRadius={'15px'}
      w={'378px'}
      h={'300px'}
      bg={'#ffffff'}
    >
      <Heading fontSize={'17px'} fontWeight={'md'}>
        CO2
      </Heading>

      <Stack>
        <Stack justifyContent={'end'}>
          <Tabs variant="soft-rounded" colorScheme="blue">
            <HStack justify={'end'}>
              <TabList
                height={'20px'}
                borderRadius={'4px'}
                bg="#d6d6d647"
                p={'3px'}
              >
                {['1H', '1D', '1W', '1M'].map(tab => (
                  <Tab key={tab} fontSize={'sm'} p={'6px'} borderRadius={'4'}>
                    {tab}
                  </Tab>
                ))}
              </TabList>
            </HStack>

            <TabPanels>
              <TabPanel>
                {/* line chart is being implemented here */}
                <Line options={options} data={data} />
              </TabPanel>
              <TabPanel>
                <p>Nothing Here Yet - </p>
              </TabPanel>
              <TabPanel>
                <p>Nothing Here Yet - -</p>
              </TabPanel>
              <TabPanel>
                <p>Nothing Here Yet - - -</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <HStack justify={'space-evenly'}>
            <Text>Current:</Text>
            <Text>Condition:</Text>
          </HStack>
        </Stack>
      </Stack>
    </Box>
  )
}
//Exports:
export default CO2
