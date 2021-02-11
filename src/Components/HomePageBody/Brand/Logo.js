import React from 'react'
import './style.css'

const Logo = ({img}) => {
    return (
        <div className="mt-3 col-lg-2 col-md-3 col-sm-4 col-xs-5">
            <img src={img} alt="brand-logo" />
        </div>
    )
}

export default Logo
