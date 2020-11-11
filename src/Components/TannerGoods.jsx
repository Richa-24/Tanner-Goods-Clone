import React from 'react'
import style from '../Css files/mazama.module.css'
import { Link } from 'react-router-dom'
import { AppContext } from '../ContextApi/ContextProvider'


class TannerGoods extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const { match } = this.props
        const { tannergoods } = this.context
        console.log(tannergoods)

        return (
            <>

                <div>
                    <div className={style.flexImg}>
                        {tannergoods.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div><Link to={`${match.url}/${item.id}`}><img src={item.image} /></Link></div>
                                    <div className={style.title}>{item.title}</div>
                                    <div className={style.brandName}>{item.brand}</div>
                                    <div className={style.price}>{item.price}</div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </>
        )
    }
}

TannerGoods.contextType = AppContext
export default TannerGoods