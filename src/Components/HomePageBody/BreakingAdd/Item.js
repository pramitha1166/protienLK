import React from 'react'
import './style.css'

const Item = ({title,itemIcon}) => {
    return (
        <div className="item col-sm-3">
            <div className="icon">{itemIcon}</div>
            <div className="title">{title}</div>
        </div>
    )
}

export default Item
