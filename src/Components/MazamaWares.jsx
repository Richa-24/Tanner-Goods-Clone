import React from 'react'
import style from '../Css files/mazama.module.css'
import { Link } from 'react-router-dom'
import { AppContext } from '../ContextApi/ContextProvider'

class MazamaWares extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const { match } = this.props
        const { mazamawares } = this.context
        console.log(mazamawares)
        return (
            <>
                <div>
                    <div className={style.flexImg}>
                        {mazamawares.map((item) => {
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

MazamaWares.contextType = AppContext
export default MazamaWares