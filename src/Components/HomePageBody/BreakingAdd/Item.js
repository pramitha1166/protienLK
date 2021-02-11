import React from 'react'
import './style.css'

const Item = ({title,icon}) => {
    return (
        <div className="item">
            <div className="icon">{icon}</div>
            <div className="title">{title}</div>
        </div>
    )
}

export default Item
