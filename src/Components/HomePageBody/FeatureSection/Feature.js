import React from 'react'
import './style.css'
import ItemCard from '../../ItemCard/ItemCard'
import { withRouter } from 'react-router'

const Feature = (props) => {

    const viewAll = () => {

        localStorage.setItem('products', JSON.stringify(props.relatedProducts))
        localStorage.setItem('title', props.headerName)

        if(window.location.pathname=='/list') {
            window.location.reload(true)
        }else {
            props.history.push('/list')
        }
    }

    return (
        <div className="featureArea">
            <div className="container">
                <div className="fearture-header">
                    <h3>{props.headerName}</h3>
                    <button onClick={viewAll}>View All</button>
                </div>
                <div className="feature-content container">
                    <div className="row">
                        {props.relatedProducts.slice(0,4).map((product,index) => (
                            <ItemCard product={product} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Feature)
