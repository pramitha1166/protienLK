import React, {useContext} from 'react'
import './style.css'
import { Link, withRouter } from 'react-router-dom' 
import { ProductContext } from '../../context/ProductContext'
import { API } from '../../API'

const HeroArea = (props) => {

    const [products,setProducts] = useContext(ProductContext)

    const shopNow = () => {
        fetch(`${API}/products/getall`)
            .then(res=> {return res.json()})
            .then(res=> {
                setProducts(res.result)
                localStorage.setItem("products", JSON.stringify(res.result))
                localStorage.setItem('title', 'All Products')
                console.log(res.result)
                props.history.push('/list')
            })
            .catch(err=> {
                console.log(err)
            })
    }

    return (
        <div className="heroArea">
            <div className="heroContent">
                <p>Welcome To Protien.Lk</p>
                <button onClick={shopNow}>Shop Now</button>
            </div>
        </div>
    )
}

export default withRouter(HeroArea)
