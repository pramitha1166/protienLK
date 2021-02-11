import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import MenuIcon from '@material-ui/icons/Menu';

const BottumHeader = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark bottumHeader">
            <div className="container">
                <div className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <MenuIcon />
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="dropdown-togle nav-link" data-toggle="dropdown" id="dropdownMenuButton" >
                                Our Products<span className="caret"></span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div className="menuContent">
                                    <ul className="tableCell noListStyle">
                                        <li>
                                            <a href="#">Drinks</a>
                                            <ul className="noListStyle">
                                                <li><a href="#">BCAA Drink</a></li>
                                                <li><a href="#">Protein Water</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Protien</a>
                                            <ul className="noListStyle">
                                                <li><a href="#">BCAA Drink</a></li>
                                                <li><a href="#">Protein Water</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="tableCell noListStyle">
                                        <li>
                                            <a href="#">Drinks</a>
                                            <ul className="noListStyle">
                                                <li><a href="#">BCAA Drink</a></li>
                                                <li><a href="#">Protein Water</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="tableCell noListStyle">
                                        <li>
                                            <a href="#">Drinks</a>
                                            <ul className="noListStyle">
                                                <li><a href="#">BCAA Drink</a></li>
                                                <li><a href="#">Protein Water</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Special Offers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Dealers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Articles</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contact us</a>
                        </li>
                    </ul>
                </div>
              
            </div>
        </nav>
    )
}

export default BottumHeader
