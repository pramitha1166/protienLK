import React from 'react'
import "./style.css"
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CallIcon from '@material-ui/icons/Call';
import RedoIcon from '@material-ui/icons/Redo';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';

const TopHeader = () => {
    return (
        <div className="topHeader">
            <div className="container">
                <div className="phoneNumber">
                    <p><span><CallIcon fontSize="small"/></span><span className="num">+94545656765 / +94545656765</span></p>
                </div>
                <nav className="topHeaderNav">
                    <ul>
                        <li><a><PersonIcon fontSize="small"/></a></li>
                        <li><a><FavoriteIcon fontSize="small"/></a></li>
                        <li><a><CompareArrowsIcon fontSize="small"/></a></li>
                        <li><a><ShoppingCartIcon fontSize="small"/></a></li>
                        <li><a><RedoIcon fontSize="small"/></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default TopHeader
