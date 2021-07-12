import React, {useState, useEffect} from 'react'
import SubCategoryItem from './SubCategoryItem'

const SubCategory = (props) => {

    const [subcategories, setSubcategories] = useState([])

    const fetchSubCategories= (id) => {
        fetch(`/category/getlAllSubCategories/${id}`)
        .then(res => {return res.json()})
        .then(res => {
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
            {subcategories.map((item,index) => (
                <SubCategoryItem id={item.id} name={item.name} key={index} />
            ))}
        </ul>
    )
}

export default SubCategory
