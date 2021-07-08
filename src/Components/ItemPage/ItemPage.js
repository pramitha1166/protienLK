import React, {useState, useEffect} from 'react'
import './style.css'
import Top from './Top'
import Middle from './Middle'
import Bottum from './Bottum'
import Banner from '../HeaderBanners/Banner'
import { withRouter } from 'react-router'

const ItemPage = (props) => {

    const [product,setProduct] = useState({})

    useEffect(() => {
        if(localStorage.getItem("product")==undefined) {
            props.history.push('list')
        }else {
            let prod = localStorage.getItem("product")
            console.log(prod)
            setProduct(JSON.parse(prod))
        }
        console.log(product)
    },[])

    return (
        <div className="itemPage">
            
            <Banner />

            <div className="container">
                {/* <Top product={product} /> */}
                <Middle product={product} />
                <Bottum product={product} />
            </div>
        </div>
    )
}

export default withRouter(ItemPage)
