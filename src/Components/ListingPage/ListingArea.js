import React, {useState, useEffect, useContext} from 'react'
import './style.css'
import ListIcon from '@material-ui/icons/List';
import AppsIcon from '@material-ui/icons/Apps';
import ListingItem from './ListingItem/ListingItem'
import { withRouter } from 'react-router';
import { ProductContext } from '../../context/ProductContext';

const ListingArea = (props) => {

    //const [products, setProducts] = useContext(ProductContext)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    // const fetchProducts = () => {
    //     setLoading(true)
    //     fetch('/products/getall')
    //         .then(res=> {return res.json()})
    //         .then(res=> {
    //             setLoading(false)
    //             setProducts(res.result)
    //             console.log(res.result)
    //         })
    //         .catch(err=> {
    //             setLoading(false)
    //             console.log(err)
    //         })
    // }

    // useEffect(() => {
    //     fetchProducts()
    // },[])

    useEffect(() => {

        // window.addEventListener('storage', () => {
        //     setProducts(JSON.parse(localStorage.getItem("products")))
        // })

        async function init() {
            const data = await localStorage.getItem("products")
            setProducts(JSON.parse(data))
        }

        init()
        
    },[])

    return (
        <div className="listing-area">
            <div className="header">
                <h4>{localStorage.getItem('title')}</h4>
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

                    {loading ? (
                        <i>Loading...</i>    
                    ) 
                    : (
                        products.map((product,index) => (
                            <ListingItem title={product.name}  price={product.price} image={product.images[0].src} product={product} props={props} />
                        ))
                    )}


                </div>
            </div>


        </div>
    )
}

export default  withRouter(ListingArea)
