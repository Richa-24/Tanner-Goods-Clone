import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import style from '../Css files/navbar.module.css'
import Banner from '../Components/Banner'

export default class NavbarLinks extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <>

                <Banner />
                <div className={style.navbar}>

                    <div className={style.logo}>
                        <NavLink to="/maintanner"><img src="https://cdn.shopify.com/s/files/1/0044/9802/files/Tanner-Goods-Mazama-Logo_150x.png?v=1600190052" /></NavLink>
                    </div>

                    <div className={style.links}>
                        <NavLink to="/tannergoods">Shop Tanner Goods</NavLink>
                        <NavLink to="/mazamawares">Shop Mazama Wares</NavLink>
                        <NavLink to="/apparel">Apparel</NavLink>
                        <NavLink to="/collections">Collections</NavLink>
                        <NavLink to="/finalsale">Final Sale</NavLink>
                        <NavLink to="/journal">Journal</NavLink>
                    </div>

                    <div className={style.icons}>
                        <div><Link to="/login"><i class="far fa-user"></i></Link></div>
                        <div><Link to="/search"><i class="fas fa-search"></i></Link></div>
                        <div><Link to="/shoppingcart"><i class="fas fa-shopping-cart"></i></Link></div>
                    </div>
                </div>



            </>
        )
    }
}