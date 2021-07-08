import React from 'react'
import './style.css'
import { Link } from 'react-router-dom' 

const HeroArea = () => {
    return (
        <div className="heroArea">
            <div className="heroContent">
                <p>Welcome To Protien.Lk</p>
                <button><Link to="/list">Shop Now</Link></button>
            </div>
        </div>
    )
}

export default HeroArea
