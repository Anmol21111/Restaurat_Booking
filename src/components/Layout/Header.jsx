import React from 'react'
import Header from "./components/Layout/Header";
import { AppBar,Box, Toolbar, Typography } from '@mui/material'
import FoodBankIcon from '@mui/icons-material/FoodBank';
const Header = () => {
  return (
    <>
    <Box>
        <AppBar component={"nav"} sx={{bgcolor:"black"}}>
            <Toolbar>
                <Typography color={'yellow'} variant='h6' component="div">
                <FoodBankIcon />    
                My Restaurant
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>
    </>
  )
}

export default Header