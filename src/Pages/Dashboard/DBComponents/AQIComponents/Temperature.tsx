//Imports:
import {
  Box,
  Heading,
  Progress,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
} from '@chakra-ui/react'
import React from 'react'

//Return:
const Temperature = () => {
  return (
    <Box
      p={3}
      m={3}
      borderRadius={'15px'}
      h={'300px'}
      bg={'#ffffff'}
      w={'200px'}
    >
      <Heading fontSize={'17px'} fontWeight={'md'}>
        Temperature
      </Heading>

      <Stack height={'260px'}>
        <Stack gap={0}>
          <Stack position={'relative'} mt={3} ml={'70px'} gap={0}>
            <Text
              alignSelf={'center'}
              color={'#58a8fd'}
              fontWeight={'bold'}
              fontSize={'2xl'}
            >
              26.25*C
            </Text>
            <Tag size={'sm'} alignSelf={'center'} colorScheme="green">
              Good
            </Tag>
          </Stack>

          <Tabs
            orientation="vertical"
            variant="soft-rounded"
            colorScheme="blue"
            width={'full'}
            height={'200px'}
          >
            <TabPanels>
              <TabPanel>
                
                <Stack
                  alignItems={'center'}
                  justify={'center'}
                  height={'150px'}
                  width={'40px'}
                >
                  {/* progress bar has been implemented here put the temperature value in (value attribute) on liine 73 */}
                  <div className="rotate-[270deg]">
                    <Progress
                      borderRadius={'50px'}
                      colorScheme="linkedin"
                      width={'230px'}
                      height="50px"
                      min={0}
                      max={100}
                      value={26.25}
                      ml={12}
                    />
                  </div>
                </Stack>
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

            <TabList
              alignSelf={'center'}
              height={'auto'}
              width={'120px'}
              borderRadius={'4px'}
              bg="#d6d6d647"
              mr={'20px'}
              p={'3px'}
              mb={7}
            >
              {['1H', '1D', '1W', '1M'].map(tab => (
                <Tab key={tab} fontSize={'sm'} p={'1px'} borderRadius={'4'}>
                  {tab}
                </Tab>
              ))}
            </TabList>
          </Tabs>
        </Stack>
      </Stack>
    </Box>
  )
}

//Exports:
export default Temperature
