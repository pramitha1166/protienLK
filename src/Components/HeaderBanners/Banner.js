import React from 'react'
import './style.css'

const Banner = ({title}) => {
    return (
        <div className="banner">
                <div className="container banner-content">
                    <h3>{title}</h3>
                </div>
        </div>
    )
}

export default Banner
