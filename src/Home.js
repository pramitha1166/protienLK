import React, {useState, useEffect} from 'react'
import './App.css'
import HeroArea from './Components/HeroArea/HeroArea'
import {Feature,Brand,BreakingAdd2} from './Components/HomePageBody/index'


const Home = () => {

    const [products, setProducts] = useState([])

    const fetchProducts = () => {
        fetch('http://localhost:5001/products/getall')
            .then(res=> {return res.json()})
            .then(res=> {
                setProducts(res.result)
                console.log(res.result)
            })
            .catch(err=> {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchProducts()
    },[])

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
            {JSON.stringify(products)}
        </div>
    )
}

export default Home
