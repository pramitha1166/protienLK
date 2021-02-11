import React from 'react'
import './style.css'
import Item from './Item'
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarsIcon from '@material-ui/icons/Stars';

const BreakingAdd2 = () => {

    const items = [
        {
            icon: DriveEtaIcon,
            title: 'Delivery Available'
        },
        {
            icon: CheckCircleIcon,
            title: 'Quality Guanranteed'
        },
        {
            icon: FavoriteBorderIcon,
            title: 'Lowest Price Guaranteed'
        },
        {
            icon: StarsIcon,
            title: 'Solo Agent For myprotien'
        }
    ]

    return (
        <div className="breakingAdd2">
          <div className="container">
            {items.map((item) => (
                <Item icon={item.icon} title={item.title} />
            ))}
          </div>
        </div>
    )
}

export default BreakingAdd2
