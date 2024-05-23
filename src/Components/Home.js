import React from 'react'
import Sidebar from './Nav/Sidebar'
import Box from '@mui/material/Box';
import Card from './Card/Card';
import Interface from './Card/Interface';
import Chartone from './Charts/Chartone';









const Home = () => {



    return (
        <Box>
            <Box sx={{ display: "flex" }} >
                <Sidebar />

                <Box component="main" sx={{ flexGrow: 1, p: 3, }}>

                    <Interface />
                    <Card />
                    <Chartone />
                    


                </Box>

                
            </Box>
           
        </Box>

    )
}

export default Home