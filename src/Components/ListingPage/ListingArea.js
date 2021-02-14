import React from 'react'
import './style.css'

import ListIcon from '@material-ui/icons/List';
import AppsIcon from '@material-ui/icons/Apps';
import ListingItem from './ListingItem/ListingItem'

const ListingArea = () => {
    return (
        <div className="listing-area">
            <div className="header">
                <h4>Protien Warter</h4>
                <div className="filter-area row">
                    <div className="col-sm-4 hiddenXs">
                        <div className="listIcon">
                            <ListIcon fontSize="small" className="icon" />
                            <AppsIcon fontSize="small" className="icon" />
                        </div>
                        
                    </div>
                    <div className="col-sm-8 col-xs-12">
                        <div className="select-filter">     
                            <select className="form-control">
                                <option value="a" selected>Sort By: Default</option>
                                <option value="b">Name(a-z)</option>
                            </select>
                            <select className="form-control">
                                <option value="a" selected>Sort By: Default</option>
                                <option value="b">Name(a-z)</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="items-area row">
                    <ListingItem />
                    <ListingItem />
                    <ListingItem />
                    <ListingItem />
                </div>
            </div>


        </div>
    )
}

export default ListingArea
