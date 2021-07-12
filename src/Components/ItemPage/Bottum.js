import React, {useState, useEffect} from 'react'
import './style.css'
import Feature from '../HomePageBody/FeatureSection/Feature'

const Bottum = ({product}) => {

    const [relatedProducts, setRelatedProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchRelatedProducts = () => {
        setLoading(true)
        fetch(`/products/list/product/category/${product.categories[0].id}`)
            .then(res => {return res.json()})
            .then(res => {
                setLoading(false)
                console.log(res.result)
                setRelatedProducts(res.result)
            })
    }

    useEffect(() => {
        fetchRelatedProducts()
    },[])

    return (
        <div className="bottum">
            {loading ? (<i>Loading...</i>) 
            : 
            (
            <Feature headerName={'Related Products'} relatedProducts={relatedProducts} />
            )
            }
            
        </div>
    )
}

export default Bottum
