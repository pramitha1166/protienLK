import React, {useState, useEffect} from 'react'
import './style.css'
import Top from './Top'
import Middle from './Middle'
import Bottum from './Bottum'
import Banner from '../HeaderBanners/Banner'
import { withRouter } from 'react-router'

const ItemPage = (props) => {

    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(false)

    useEffect(() => {
        if(localStorage.getItem("product")==undefined) {
            props.history.push('list')
        }else {
           // setProduct(localStorage.getItem("product"))
           // console.log(localStorage.getItem("product"))
        }
    },[])

    return (
        <div className="itemPage">
            
            <Banner />

            <div className="container">
                <Top product={JSON.parse(localStorage.getItem("product"))} short_description={JSON.parse(localStorage.getItem("product")).short_description}  />
                <Middle product={JSON.parse(localStorage.getItem("product"))} />
                <Bottum product={JSON.parse(localStorage.getItem("product"))} /> 
            </div>
        </div>
    )
}

export default withRouter(ItemPage)
