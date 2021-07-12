import React,{useEffect, useState} from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import MenuIcon from '@material-ui/icons/Menu';
import SubCategory from './SubCategory';
import { withRouter } from 'react-router';
import { API } from '../../API';

class BottumHeader extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            categories: [],
            subCategories: [],
            loading: false
        }
    }

    fetchSubCategories(id) {

        let arr = [];
        let get_result = [];

        this.setState({
            loading: true
        })

        fetch(`${API}/category/getlAllSubCategories/${id}`)
            .then(res => {return res.json()})
            .then(res => {

                //get_result = res.result;
                

                this.setState({
                    categories: res.result,
                    loading: false
                })
            })
            .catch(err=> {
                console.log(err)
            })
    }

    fetchParentCategories() {

        let arr = []

        this.setState({
            loading: true
        })

        fetch(`${API}/category/getlAllParentCategories`)
            .then(res => {return res.json()})
            .then(res => {

                console.log(res.result)

                for(let i=0; i<res.result.length; i=i+3) {
                    arr.push(res.result.slice(i,i+3))
                }

                console.log(arr)

                this.setState({
                    categories: arr,
                    loading: false
                })
            })
            .catch(err=> {
                console.log(err)
            })
    }

    componentDidMount() {
        this.fetchParentCategories()
        console.log('categories',this.state.categories)
    }


    showProduct = (id,name) => {
        //console.log(props.id)
        fetch(`${API}/products/list/product/category/${id}`)
            .then(res => {return res.json()})
            .then(res => {
                console.log(res.result)
                localStorage.setItem("products", JSON.stringify(res.result))
                localStorage.setItem('title', name)

                console.log(window.location.pathname)

                if(window.location.pathname=='/list') {
                    window.location.reload(true)
                }else {
                    this.props.history.push('/list')
                }

                
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {

        const {categories, subCategories} = this.state

        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark bottumHeader">
                <div className="container">
                    <div className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <MenuIcon />
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="dropdown-togle nav-link" data-toggle="dropdown" id="dropdownMenuButton" >
                                    Our Products<span className="caret"></span>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <div className="menuContent">

                                        {this.state.loading ? 
                                        (
                                            <div className="loading">
                                                <i>Loading</i>    
                                            </div>
                                        ) : 

                                            categories.map((item,index) => (
                                                <ul className="tableCell noListStyle">
                                                    {item.map((cate,index) => (
                                                        <li key={index}>
                                                            <a onClick={(e) => {this.showProduct(cate.id,cate.name)}}>{cate.name}</a>
                                                            <SubCategory id={cate.id} />
                                                        </li>
                                                    ))}
                                                    
                                                </ul>
                                            ))
                                            
                                        }

                                       
                                        
                                    </div>
                                
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Special Offers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Dealers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Articles</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Contact us</a>
                            </li>
                        </ul>
                    </div>
                  
                </div>
            </nav>
        )
    }
    
}

export default withRouter(BottumHeader)
