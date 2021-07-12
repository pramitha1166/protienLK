import React from 'react'
import { withRouter } from 'react-router'
import { API } from '../../API'

const SubCategoryItem = (props) => {

    const showProduct = () => {
        console.log(props.id)
        fetch(`${API}/products/list/product/category/${props.id}`)
            .then(res => {return res.json()})
            .then(res => {
                console.log(res.result)
                localStorage.setItem("products", JSON.stringify(res.result))
                localStorage.setItem('title', props.name)

                console.log(props.location.pathname)

                if(props.location.pathname=='/list') {
                    window.location.reload(true)
                }else {
                    props.history.push('/list')
                }

                
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <li onClick={showProduct}>
            <a>{props.name}</a>
        </li>
    )
}

export default withRouter(SubCategoryItem)
