import React, {useEffect} from 'react'
import './style.css'

const ListingItem = ({image, title, price, product, props}) => {


    useEffect(() => {
        console.log(parseInt(product.average_rating))

         let ratings = document.querySelectorAll("#rate")

         let list = ['a','a','a','a','a']

         for(let i=0;i<parseInt(product.average_rating);i++) {
             list[i] = 'checked'
         }

         ratings.forEach((item,index) => {
             item.classList.add(list[index])
         })

    },[])


    const viewItem = () => {
        props.history.push('/item')
        localStorage.setItem('product', JSON.stringify(product))
    }


    return (
        <div className="col-sm-6 col-xs-12 col-md-4 col-lg-4">
            <div className="listing-item">
                <div className="item-card">
                    <div className="item-media">
                        <img src={`${image}`} />
                    </div>
                    <div className="item-content">
                        <div className="title">
                            <h5>{title}</h5>
                        </div>
                        <div className="price-rating">
                            <p className="price">{price}</p>
                            <div className="rating">
                                <span id="rate" className="fa fa-star checked"></span>
                                <span id="rate" className="fa fa-star"></span>
                                <span id="rate" className="fa fa-star"></span>
                                <span id="rate" className="fa fa-star"></span>
                                <span id="rate" className="fa fa-star"></span>  
                            </div>
                        </div>
                        <div className="view-btn">
                            <button onClick={viewItem}>View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingItem
