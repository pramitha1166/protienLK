import React from 'react'
import './style.css'
import Top from './Top'
import Middle from './Middle'
import Bottum from './Bottum'

const ItemPage = () => {
    return (
        <div className="itemPage">
            <div className="banner">
                <div className="container banner-content">
                    <h3>Impact Whey Protien</h3>
                </div>
            </div>
            <div className="container">
                <Top />
                <Middle />
                <Bottum />
            </div>
        </div>
    )
}

export default ItemPage
