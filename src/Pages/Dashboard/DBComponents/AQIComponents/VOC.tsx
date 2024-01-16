//Imports:
import {
  Box,
  HStack,
  Heading,
  Stack,
  Tag,
  TagLabel,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

//State:
ChartJS.register(ArcElement, Tooltip, Legend)

const VOC = () => {
  //Constants:
  const data = {
    // labels: ['Benzene', 'Toluene'],
    datasets: [
      {
        label: 'Concentration',
        data: [50, 30],
        backgroundColor: ['#2396EF', '#006ACD'],
        borderColor: ['#ffffff'],
        borderWidth: 10,
      },
    ],
  }

  const tables = [
    {
      compound: 'Benzene',
      amt: 50,
      tag: 'Good',
      color: '#2396EF',
    },
    {
      compound: 'Toluene',
      amt: 30,
      tag: 'Average',
      color: '#006ACD',
    },
  ]

  //Return:
  return (
    <Box
      p={3}
      m={3}
      borderRadius={'15px'}
      w={'406px'}
      h={'300px'}
      bg={'#ffffff'}
    >
      <Heading fontSize={'17px'} fontWeight={'md'}>
        VOC - (volatile organic compounds)
      </Heading>

      <HStack>
        <Stack
          justify={'center'}
          alignItems={'center'}
          height={'250px'}
          width={'169px'}
        >
          {/* graph */}

          <Doughnut data={data} />
        </Stack>

        <Stack width={'auto'}>
          {/* table */}
          <HStack
            color={'#858383'}
            justify={'space-between'}
            fontSize={14}
            fontWeight={'bold'}
          >
            <Text>Compound</Text>
            <Text>Amt</Text>
            <Text>Condition</Text>
          </HStack>
          {tables.map(val => (
            <HStack
              justify={'space-between'}
              fontWeight={'black'}
              fontSize={12}
              key={val.compound}
            >
              <Text color={val.color}>{val.compound}</Text>
              <Text>{val.amt}</Text>
              <Tag variant={'outline'} size={'sm'}>
                <TagLabel>{val.tag}</TagLabel>
              </Tag>
            </HStack>
          ))}
        </Stack>
      </HStack>
    </Box>
  )
}

//Exports:
export default VOC
