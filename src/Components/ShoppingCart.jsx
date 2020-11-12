import React from 'react'
import { AppContext } from '../ContextApi/ContextProvider'
import { Redirect } from 'react-router-dom'
import style from '../Css files/cart.module.css'

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    render() {
        const { cartArray, isAuth, handleDelete } = this.context


        return (
            <>
                {!isAuth ? <Redirect to="/login" /> : null}

                <div>
                    {cartArray.length === 0 ? (
                        <img className={style.emptyImage} src="https://chillydraji.files.wordpress.com/2015/08/empty_cart.jpeg" alt="empty cart" />
                    ) :
                        (
                            cartArray.map((item) => {
                                return (
                                    <div key={item.id} className={style.disFlex}>
                                        <div><img src={item.image} width="200px" height="200px" alt="cart items" /></div>
                                        <div className={style.productDetails}>
                                            <div className={style.brand}>{item.brand}</div>
                                            <div className={style.title}>{item.title}</div>
                                            <div className={style.price}>{item.price}</div>
                                            <div className={style.button}>
                                                <button>CHECK OUT</button>
                                                <button onClick={() => { handleDelete(item.id) }}>REMOVE</button>
                                            </div>
                                        </div>
                                    </div>
                                )

                            })
                        )
                    }
                </div>
            </>
        )
    }
}

ShoppingCart.contextType = AppContext
export default ShoppingCart