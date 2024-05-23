import React from 'react'
import { Box } from '@mui/material'


import EnhancedTable from './EnhancedTable'
import Sidebar from '../Nav/Sidebar'



const Main = () => {
  return (
    <Box sx={{ display: "flex" }} >
         <Sidebar/>

    <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
       
       <EnhancedTable/>
    </Box>

    
</Box>
  )
}

export default Main