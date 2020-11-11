import React from 'react'
import style from '../Css files/mainTanner.module.css'
import { Link } from 'react-router-dom'
import { AppContext } from '../ContextApi/ContextProvider'

class MainTanner extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        const { match } = this.props
        const { maintanner } = this.context
        console.log(maintanner)
        return (
            <>
                <div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" width="100%" height="600px" />
                    </div>
                </div>

                <div>
                    <h2 className={style.explore}>Explore Best Sellers</h2>
                    <div className={style.gridImg}>
                        {maintanner.map((item) => {
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

                    <div className={style.viewAll}>VIEW ALL</div>
                </div>
            </>
        )
    }
}

MainTanner.contextType = AppContext
export default MainTanner