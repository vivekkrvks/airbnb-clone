import { Button } from '@material-ui/core'
import React from 'react'
import './Banner.css'
function Banner() {
    return (
        <div className='banner'>
        <div className='banner__info'>
            <h1> Get out and stretch your imagination</h1>
            <Button    variant='outlined'> 
                Explore Nearby
            </Button>
        </div>
            
        </div>
    )
}

export default Banner
