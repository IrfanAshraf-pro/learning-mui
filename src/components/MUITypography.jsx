import React from 'react'
import { Typography } from '@mui/material'

const MUITypography = () => {
  return (
    <div>
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4" component="h1">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6" gutterBottom>Heading 6</Typography>
        <Typography variant="subtitle1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ducimus consectetur eum quos, autem asperiores.</Typography>
        <Typography variant="subtitle2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, incidunt unde quam minima qui beatae!</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, eveniet?</Typography>
        <Typography variant="body2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ab.</Typography>

    </div>
  )
}

export default MUITypography