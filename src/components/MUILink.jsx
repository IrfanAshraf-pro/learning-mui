import { Link, Stack, Typography } from '@mui/material'
import React from 'react'

const MUILink = () => {
  return (
    <Stack direction='row' spacing={2} m={4}>
         <Link href="#" variant='body2'>Link</Link>
         <Link href="#" color='secondary' underline='hover'>Secondary</Link>
         <Typography variant='h6'>
         <Link href="#" color='secondary' underline='none'>NO Underline</Link>
         </Typography>

    </Stack>
  )
}

export default MUILink