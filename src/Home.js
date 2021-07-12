import React, {useState, useEffect, useContext} from 'react'
import './App.css'
import HeroArea from './Components/HeroArea/HeroArea'
import {Feature,Brand,BreakingAdd2} from './Components/HomePageBody/index'
import { ProductContext } from './context/ProductContext'
import { API } from './API'

const Home = () => {

    const [featureProducts, setFeatureProducts] = useState([])
    const [onsaleProducts, setOnsaleProducts] = useState([])
    const [loading, setLoading] = useState(false)


    const fetchFeatureProducts = () => {
        setLoading(true)
        fetch(`${API}/products/list/featured`)
            .then(res => {return res.json()})
            .then(res => {
                setLoading(false)
                setFeatureProducts(res.result)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const fetchOnSaleProducts = () => {
        setLoading(true)
        fetch(`${API}/products/list/onsale`)
            .then(res => {return res.json()})
            .then(res => {
                setLoading(false)
                setOnsaleProducts(res.result)
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    useEffect(() => {
        fetchFeatureProducts()
        fetchOnSaleProducts()
    },[])

    return (
        <div>
            <HeroArea />
            <div className="mt-3">
                {loading ? (
                    <>
                        <i>Loading...</i>
                    </>
                ): (
                    <>
                        <Feature headerName={'Feature Products'} relatedProducts={featureProducts} />
                        <Feature headerName={'On Sale Products'} relatedProducts={onsaleProducts} />
                    </>
                )}
               
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
