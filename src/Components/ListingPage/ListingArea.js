import React, {useState, useEffect} from 'react'
import './style.css'

import ListIcon from '@material-ui/icons/List';
import AppsIcon from '@material-ui/icons/Apps';
import ListingItem from './ListingItem/ListingItem'
import { withRouter } from 'react-router';

const ListingArea = (props) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState([])

    const fetchProducts = () => {
        fetch('http://localhost:5001/products/getall')
            .then(res=> {return res.json()})
            .then(res=> {
                setProducts(res.result)
                console.log(res.result)
            })
            .catch(err=> {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchProducts()
    },[])

    return (
        <div className="listing-area">
            <div className="header">
                <h4>Our Products</h4>
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

                    {products.map((product, index) => (
                        <ListingItem title={product.name}  price={product.price} image={product.images[0].src} product={product} props={props} />
                    ))}

                </div>
            </div>


        </div>
    )
}

export default  withRouter(ListingArea)
