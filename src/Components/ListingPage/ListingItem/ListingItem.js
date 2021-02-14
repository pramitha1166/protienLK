import React from 'react'
import './style.css'

const ListingItem = () => {
    return (
        <div className="col-sm-6 col-xs-12 col-md-4 col-lg-4">
            <div className="listing-item">
                <div className="item-card">
                    <div className="item-media">
                        <img src="https://www.protein.lk/image/cache/catalog/Rebrand/proteinwater%20lemon-200x200.jpg" />
                    </div>
                    <div className="item-content">
                        <div className="title">
                            <h5>Protien Warter</h5>
                        </div>
                        <div className="price-rating">
                            <p className="price">Rs.1000.00</p>
                            <div className="rating">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                            </div>
                        </div>
                        <div className="view-btn">
                            <button>View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingItem
