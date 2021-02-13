import React from 'react'
import './style.css'
import FavoriteIcon from '@material-ui/icons/Favorite';

const ItemCard = () => {
    return (
        <div className="itemCardArea col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="itemCard">
                <div className="itemMedia">
                    <div className="itemImage">
                        <img src="https://www.protein.lk/image/cache/catalog/Rebrand/curcumin%20and%20vitamin%20d%202-200x200.jpg" alt="item-image" />
                    </div>
                    <div className="itemName">
                        <p>Curcumin & Vitamin D3 Capsule</p>
                    </div>
                </div>
                <div className="cardActionArea">
                    <div className="view">
                        <a>View</a>
                    </div>
                    <div className="price">
                        <p>Rs.10000</p>
                    </div>
                    <div className="fav">
                        <FavoriteIcon fontSize="small"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
