import React, {useState, useEffect} from 'react'
import SubCategoryItem from './SubCategoryItem'
import { API } from '../../API'

const SubCategory = (props) => {

    const [subcategories, setSubcategories] = useState([])

    const [loading, setLoading] = useState(false)

    const fetchSubCategories= (id) => {
        setLoading(true)
        fetch(`${API}/category/getlAllSubCategories/${id}`)
        .then(res => {return res.json()})
        .then(res => {
            setLoading(false)
          setSubcategories(res.result)
        })
        .catch(err=> {
            console.log(err)
        })
    }

    useEffect(()=> {
        fetchSubCategories(props.id)
    },[])

    const show = (id) => {
        console.log(id)
    }

    return (
        <ul>
            {loading ? 
                (<div className="loading">
                    <i>Loading</i>
                </div>)
                : 
                subcategories.map((item,index) => (
                    <SubCategoryItem id={item.id} name={item.name} key={index} />
                ))
            }
           
        </ul>
    )
}

export default SubCategory
