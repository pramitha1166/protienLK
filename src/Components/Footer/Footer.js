import React from 'react'
import "./style.css"

const Footer = () => {
    return (
        <div className="footerArea">
            <div className="container">
                <div className="row">
                    <ul className="noListStyle col-lg-2">
                        <h4 className="titleText">Information</h4>
                        <li className="listItem"><a className="noLinkStyle">About Us</a></li>
                        <li className="listItem"><a className="noLinkStyle">Privacy Policy</a></li>
                        <li className="listItem"><a className="noLinkStyle">Terms & Conditions</a></li>
                        <li className="listItem"><a className="noLinkStyle">COD Locations</a></li>
                    </ul>
                    <ul className="noListStyle col-lg-2">
                        <h4 className="titleText">Customer Service</h4>
                        <li className="listItem"><a className="noLinkStyle">Contact Us</a></li>
                        <li className="listItem"><a className="noLinkStyle">Site Map</a></li>
                        <li className="listItem"><a className="noLinkStyle">My Account</a></li>
                        <li className="listItem"><a className="noLinkStyle">Order History</a></li>
                    </ul>
                    <ul className="noListStyle col-lg-2">
                        <h4 className="titleText">Extras</h4>
                        <li className="listItem"><a className="noLinkStyle">Gift Certificates</a></li>
                        <li className="listItem"><a className="noLinkStyle">Specials</a></li>
                        <li className="listItem"><a className="noLinkStyle">Newsletter</a></li>
                        <li className="listItem"><a className="noLinkStyle">Wish List</a></li>
                    </ul>
                    <ul className="noListStyle col-lg-3">
                        <h4 className="titleText">Information</h4>
                        <li className="listItem">No: 205C, Main Street, Attidiya, <br />Dehiwala</li>
                        <li className="listItem">Hot Line: 0773373373 / 0777110001</li>
                        <li className="listItem">Tel: 0113674764</li>
                        <li className="listItem">Fax: 0112718666</li>
                        <li className="listItem">Email: info@protein.lk</li>
                    </ul>
                    <ul className="noListStyle col-lg-3">
                        <h4 className="titleText">About Us</h4>
                        <li className="listItem">Protein.lk was founded in 2016 to serve a niche yet growing market in Sri Lanka for sports nutrition supplements. Our intention has been to bring to Sri Lanka’s consumers quality sports...[Read More]</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
