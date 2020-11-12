import React from 'react'
import axios from 'axios'
import style from '../Css files/productDetails.module.css'
import { Link } from 'react-router-dom'
import { AppContext } from '../ContextApi/ContextProvider'

class ProductDetails extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }
    componentDidMount() {

        let link = this.props.match.url;
        console.log(link)

        axios.get(`https://api.npoint.io/a64812649cd4a7bfa071${link}`)
            .then((res) => {
                console.log(res)
                this.setState({
                    data: res.data
                })
            })
            .catch((err) => console.log(err))
    }



    render() {
        const { handleCart } = this.context
        const { data } = this.state
        console.log(data)

        return (

            <>


                <div className={style.flex}>

                    <div className={style.image}>
                        <img src={data.image} width="600px" height="500px" alt="product" />
                    </div>

                    <div className={style.rightDetails}>
                        <div className={style.brand}>{data.brand}</div>
                        <div className={style.title}>{data.title}</div>
                        <div className={style.price}>{data.price}</div>
                        <div className={style.addButton}><Link to="/shoppingcart"><button onClick={() => handleCart(data)}>ADD TO CART</button></Link></div>
                        <div className={style.desc}>{data.description}</div>

                    </div>

                </div>

            </>
        )
    }

}

ProductDetails.contextType = AppContext
export default ProductDetails