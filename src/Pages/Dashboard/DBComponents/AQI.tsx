//Imports:
import {
  Box,
  Button,
  Collapse,
  Flex,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa'
import { FaWind } from 'react-icons/fa'
import React from 'react'
 //Components:
import PM from './AQIComponents/PM'
import Temperature from './AQIComponents/Temperature'
import Humidity from './AQIComponents/Humidity'
import CO2 from './AQIComponents/CO2'
import VOC from './AQIComponents/VOC'

const AQI = () => {
  //Constants:
  const { isOpen, onToggle } = useDisclosure()
  return (
    //Return:
   
    <>
      <Heading fontWeight={'md'} fontSize={'20px'}>
        AQI
      </Heading>

      <Button
        bg={'white'}
        justifyContent={'space-between'}
        onClick={onToggle}
        _hover={{
          bg: '#0272ce8e',
          color: 'white',
        }}
      >
        <HStack>
          <Icon as={FaWind} />
          <Text>AQI</Text>
        </HStack>
        <Icon as={FaChevronDown} />
      </Button>

      <Collapse in={isOpen} animateOpacity>
        <Box color="black">
          <Stack alignItems={'center'}>
            <Flex flexDirection={{ base: 'column', lg: 'row' }}>
              {/* pm2.5  */}
              <PM />
              {/* Temperature box */}
              <Temperature />
              {/* Humidity box */}
              <Humidity />
            </Flex>
            <Flex flexDirection={{ base: 'column', lg: 'row' }}>
              {/* CO2 box */}
              <CO2 />
              {/* VOC box */}
              <VOC />
            </Flex>
          </Stack>
        </Box>
      </Collapse>
    </>
  )
}
//Exports:
export default AQI
