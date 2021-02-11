import React from 'react'
import './style.css'
import ItemCard from '../../ItemCard/ItemCard'

const Feature = ({headerName}) => {
    return (
        <div className="featureArea">
            <div className="container">
                <div className="fearture-header">
                    <h3>{headerName}</h3>
                    <button>View All</button>
                </div>
                <div className="feature-content container">
                    <div className="row">
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature
