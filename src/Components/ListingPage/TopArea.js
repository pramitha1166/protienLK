import React from 'react'
import './style.css'

import Category from './Category'
import ListingArea from './ListingArea'

const TopArea = () => {
    return (
        <div className="top-area row">
            <div className="col-sm-2 hiddenXs">
                <Category />
            </div>
            <div className="col-sm-10">
                <ListingArea />
            </div>
        </div>
    )
}

export default TopArea
