import React from 'react'
import MainTanner from '../Components/MainTanner'
import TannerGoods from '../Components/TannerGoods'
import MazamaWares from '../Components/MazamaWares'
import Apparel from '../Components/Apparel'
import Collections from '../Components/Collections'
import FinalSale from '../Components/FinalSale'
import Journal from '../Components/Journal'
import Login from '../Components/Login'
import Search from '../Components/Search'

import AboutUs from '../Components/AboutUs'
import ContactUs from '../Components/ContactUs'
import FAQ from '../Components/FAQ'
import ProductDetails from '../Components/ProductDetails'
import { Route, Redirect } from 'react-router-dom'
import ShoppingCart from '../Components/ShoppingCart'



export default class Routes extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        console.log(window.location.href);
        if (window.location.href[(window.location.href.length - 1)] == "/") {
            window.location.href = "/maintanner"
        }
    }

    render() {
        return (
            <>
                <div>
                    <Route path="/maintanner" exact render={(props) => <MainTanner {...props} />}></Route>
                    <Route path="/tannergoods" exact render={(props) => <TannerGoods {...props} />}></Route>
                    <Route path="/mazamawares" exact render={(props) => <MazamaWares {...props} />}></Route>
                    <Route path="/apparel" render={(props) => <Apparel {...props} />}></Route>
                    <Route path="/collections" render={(props) => <Collections {...props} />}></Route>
                    <Route path="/finalsale" render={(props) => <FinalSale {...props} />}></Route>
                    <Route path="/journal" render={(props) => <Journal {...props} />}></Route>
                    <Route path="/about" render={(props) => <AboutUs {...props} />}></Route>
                    <Route path="/contact" render={(props) => <ContactUs {...props} />}></Route>
                    <Route path="/faq" render={(props) => <FAQ {...props} />}></Route>
                    <Route path="/login" render={(props) => <Login {...props} />}></Route>
                    <Route path="/search" render={(props) => <Search {...props} />}></Route>
                    <Route path={`/maintanner/:id`} render={(props) => <ProductDetails  {...props} />}></Route>
                    <Route path={`/tannergoods/:id`} render={(props) => <ProductDetails  {...props} />}></Route>
                    <Route path={`/mazamawares/:id`} render={(props) => <ProductDetails  {...props} />}></Route>
                    <Route path="/shoppingcart" render={(props) => <ShoppingCart  {...props} />}></Route>
                </div>
            </>
        )
    }
}