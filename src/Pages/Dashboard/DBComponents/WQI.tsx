//Imports:
import React from 'react'
import {
  Box,
  Button,
  Collapse,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { FaWater } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'

const WQI = () => {
  //Constants:
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Heading fontWeight={'md'} fontSize={'20px'}>
        WQI
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
          <Icon as={FaWater} />
          <Text>WQI</Text>
        </HStack>
        <Icon as={FaChevronDown} />
      </Button>

      <Collapse in={isOpen} animateOpacity>
        <Box color="black">
          <Stack alignItems={'center'}>
            {/* put the progress bar here */}
            <Text>
              ----------------------------------------------------------Progress
              bars and all the data will be added
              here-----------------------------------------------------..............................................................................................................................................................................................................................
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              nisi perferendis molestiae ipsum beatae aut accusantium recusandae
              aperiam temporibus fuga commodi assumenda maiores, soluta neque
              sit, architecto obcaecati ipsam dicta. `
            </Text>
          </Stack>
        </Box>
      </Collapse>
    </>
  )
}

export default WQI
