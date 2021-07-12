import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import { withRouter } from 'react-router';

const MainHeader = (props) => {

    const clickLogo = () => {
        props.history.push('/')
    }

    return (
        <div className="mainHeader container">
            <div className="row" style={{width:'100%'}}>
                <div className="logo col-lg-4 col-sm-12 col-xs-12" onClick={clickLogo}>
                    <img src="https://www.protein.lk/image/catalog/logo.gif" alt="logo" />
                </div>
                {/* <div className="col-lg-8 col-sm-12 col-xs-12 mt-2" style={{justifyContent:'space-between'}}>
                    <div className="row">
                        <div className="cartTot col-lg-5 col-sm-5 col-xs-12">
                            <ShoppingCartIcon fontSize="large"/>
                            <p><span>0 Items | </span><span>Rs.0</span></p>
                        </div>
                        <div className="searchArea col-lg-5 col-sm-5 col-xs-12">
                            <div className="searchBar">
                                <input type="text" placeholder="Search Here" />
                                <div className="searchIcon">
                                    <SearchIcon fontSize="small" className="icon"  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default withRouter(MainHeader)
