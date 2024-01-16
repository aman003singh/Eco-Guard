//Imports:
import React from 'react'
import { Stack } from '@chakra-ui/react'

 //Components:
import DashboardLayout from '../../Components/DashboardLayout'
import AQI from './DBComponents/AQI'
import Rooms from './DBComponents/Rooms'
import WQI from './DBComponents/WQI'

const Dashboard = () => {
  //Return:
  return (
   
    <div className=" bg-[#e8f3fc]">
     <DashboardLayout title={'Dashboard'}>
      <Stack mx={"auto"}  gap={5} >
        <Rooms />
        <AQI />
        <WQI/>
      </Stack>
    </DashboardLayout>
    </div>
  )
}
//Exports:
export default Dashboard
