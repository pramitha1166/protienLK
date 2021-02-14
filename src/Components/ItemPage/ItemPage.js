import React from 'react'
import './style.css'
import Top from './Top'
import Middle from './Middle'
import Bottum from './Bottum'
import Banner from '../HeaderBanners/Banner'

const ItemPage = () => {
    return (
        <div className="itemPage">
            
            <Banner />

            <div className="container">
                <Top />
                <Middle />
                <Bottum />
            </div>
        </div>
    )
}

export default ItemPage
