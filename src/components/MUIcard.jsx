import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const MUIcard = () => {
  return (
    <Box width='300px'>
        <Card>
            <CardMedia
            component='img'
            height='140'
            image='https://source.unsplash.com/random'
            alt='unsplash image'
            />
            <CardContent>
                <Typography variant='h2' gutterBottom component='div'>React</Typography>
                <Typography variant='body2' color='text.secondary'>
                    React is a Javascript library. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eveniet.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn more</Button>
                
            </CardActions>
        </Card>
    </Box>
  )
}
 
export default MUIcard