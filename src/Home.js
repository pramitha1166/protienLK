import React from 'react'
import './App.css'
import HeroArea from './Components/HeroArea/HeroArea'
import {Feature,Brand,BreakingAdd2} from './Components/HomePageBody/index'


const Home = () => {
    return (
        <div>
            <HeroArea />
            <div className="mt-3">
                <Feature headerName={'Feature Products'} />
                <Feature headerName={'Recomend Products'} />
            </div>
            <div className="breakingAdd">
                <h3>Island Delivery Available</h3>
            </div>
            <Brand />
            <BreakingAdd2 />
        </div>
    )
}

export default Home
