import React from 'react'
import './style.css'
import Banner from '../HeaderBanners/Banner'
import TopArea from './TopArea'

const ListingPage = () => {
    return (
        <div className="listing-page">
            <Banner title="Search Products" />

            <div className="container">
                <TopArea />
            </div>

        </div>
    )
}

export default ListingPage
