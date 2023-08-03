import React from 'react'
import './Trending.css'
import TrendingTopix from '../TrendingTopic/TrendingTopic'

export default function Trending() {
    return (

        <div className='Trending-Sec'>

            <div className='title'> <p>Trending</p> <div className='line'></div> </div>

            <div className='Trending-topics'>

                <TrendingTopix/>
                <TrendingTopix/>
                <TrendingTopix/>
                <TrendingTopix/>

                
            </div>

            <div className='Divider'></div>

        </div>

    )
}
