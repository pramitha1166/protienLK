import React from 'react'
import Logo from './Logo'
import './style.css'

const Brand = () => {

    const logos = [
        {
            img: 'https://www.protein.lk/image/cache/catalog/logos/labdoor-140x85.gif'
        },
        {
            img: 'https://www.protein.lk/image/cache/catalog/logos/puremax-140x85.gif'
        },
        {
            img: 'https://www.protein.lk/image/cache/catalog/logos/organic-140x85.gif'
        },
        {
            img: 'https://www.protein.lk/image/cache/catalog/logos/mk-140x85.gif'
        },
        {
            img: 'https://www.protein.lk/image/cache/catalog/logos/vegetarian-140x85.gif'
        },
        {
            img: 'https://www.protein.lk/image/cache/catalog/logos/stars-140x85.gif'
        },
        {
            img: 'https://www.protein.lk/image/cache/catalog/logos/kre-140x85.gif'
        },
        {
            img: 'https://www.protein.lk/image/cache/catalog/logos/inform-trsut-140x85.gif'
        },
        {
            img: 'https://www.protein.lk/image/cache/catalog/logos/creapure-140x85.gif'
        },
        {
            img: 'https://www.protein.lk/image/cache/catalog/logos/essna-140x85.gif'
        },
        {
            img: 'https://www.protein.lk/image/cache/catalog/logos/haccp-140x85.gif'
        },
        {
            img: 'https://www.protein.lk/image/cache/catalog/logos/als-140x85.gif'
        }
    ]

    return (
        <div className="brand container">
            <h3>WORLD'S NO.1 ONLINE SPORTS NUTRITION BRAND</h3>
            <div className="brand-logos row">
                {logos.map((item) => (
                    <Logo img={item.img} />
                ))}
            </div>
        </div>
    )
}

export default Brand
