import React from 'react'
import './style.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';

const Top = ({product}) => {
    return (
        <div className="row top">
            <div className="col-lg-5 col-md-6 col-sm-6 top-container">
                <div className="media">
                    <img src={`${product.images[0].src}`} />
                    <div className="action">
                    <a href="#" ><span><FavoriteIcon className="icon" fontSize="small" /></span>Add To Wishlist</a>
                    <a href="#" ><span><CompareArrowsIcon className="icon" fontSize="small" /></span>Add To Compare</a>
                </div>
                </div>
                
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 details-container">
                <ul className="noListStyle basic-details">
                    <li><p>Product Code: Impact Whey Protein1474523205</p></li>
                    <li><p>Availability: In Stock</p></li>
                </ul>
                <h3>Impact Whey Protein</h3>
                <ul className="noListStyle price"><h5>Rs.10,000.00</h5></ul>
                <ul className="noListStyle main-details">
                    <li><span><ArrowForwardIcon  className="listIcon" /></span> 21g protein per serving*</li>
                    <li><span><ArrowForwardIcon  className="listIcon" /></span> 4.5g naturally-occurring BCAAs</li>
                    <li><span><ArrowForwardIcon  className="listIcon" /></span> Low in sugar*</li>
                    <li><span><ArrowForwardIcon  className="listIcon" /></span> Over 40 delicious flavours</li>
                    <li><span><ArrowForwardIcon  className="listIcon" /></span> *Nutritional information will vary depending on flavour.</li>
                </ul>
                
            </div>
            <div className="col-lg-3 col-md-8 col-sm-12">
                <div className="selection">
                    <div className="container">
                        <h4>Available Options</h4>
                        <h5>Flavor & Amount</h5>
                        <select className="form-control">
                            <option value="">---Please Select---</option>
                            <option disabled className="disabledSelect">1kg  / 2.2 lbs</option>
                            <option value="op1">Chockolate Brownee</option>
                            <option value="op1">Chockolate Nut</option>
                            <option value="op1">Chockolate Smooth</option>
                            <option value="op1">White Chockolate</option>
                            <option disabled className="disabledSelect">2.5kg  / 5.5 lbs</option>
                            <option value="op1">Chockolate Brownee</option>
                            <option value="op1">Chockolate Smootht</option>
                            <option value="op1">Milk Tea</option>
                            <option disabled className="disabledSelect">5kg  / 11 lbs</option>
                            <option value="op1">Chockolate Smootht</option>
                        </select>
                        <form className="form-group addCartArea">
                            <label className="control-label input-quantity-label">Qty</label>
                            <input type="text" name="quantity" value="1" size="2" id="input-quantity" className="form-control" />
                            <input type="text" name="item_id" hidden />
                            <button type="button" id="button-cart" data-loading-text="Loading..." className="btn-cart">Add To Cart</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top
