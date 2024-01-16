//Imports:
import React from 'react'
import SideNav from './SideNav'
import { Box, Container, Flex, useDisclosure } from '@chakra-ui/react'
import TopNav from './TopNav'
import SideDrawer from './SideDrawer'

const DashboardLayout = ({ title, children }) => {
  //Constants:
  const { isOpen, onClose, onOpen } = useDisclosure()

  //Return:
  return (
    <Flex>
      <Box
        display={{
          base: 'none',
          lg: 'flex',
        }}
      >
{/* // Components: */}
        <SideNav />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <TopNav onOpen={onOpen} title={title} />
        <Container maxWidth={'70vw'} p={4}>
          {children}
        </Container>
      </Box>
    </Flex>
  )
}
//Exports:
export default DashboardLayout
