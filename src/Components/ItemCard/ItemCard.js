import React from 'react'
import './style.css'
import FavoriteIcon from '@material-ui/icons/Favorite';

const ItemCard = ({product}) => {
    return (
        <div className="itemCardArea col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="itemCard">
                <div className="itemMedia">
                    <div className="itemImage">
                        <img src={`${product.images[0].src}`} alt="item-image" />
                    </div>
                    <div className="itemName">
                        <p>{product.name}</p>
                    </div>
                </div>
                <div className="cardActionArea">
                    <div className="view">
                        <a>View</a>
                    </div>
                    <div className="price">
                        <p>{product.price}</p>
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
