import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { Home,Favorite,Person } from '@mui/icons-material'
import { useState } from 'react'

const MUIBottomNavigation = () => {
    const [value,setValue]=useState(0)
  return (
    <BottomNavigation sx={{width:'100%',position:'absolute',bottom:0}} value={value} onChange={(e,newValue)=>{setValue(newValue)}} showLabels>
        <BottomNavigationAction label='Home' icon={<Home/>}/>
        <BottomNavigationAction label='Favorite' icon={<Favorite/>}/>
        <BottomNavigationAction label='Person' icon={<Person/>}/>

    </BottomNavigation>
  )
}

export default MUIBottomNavigation