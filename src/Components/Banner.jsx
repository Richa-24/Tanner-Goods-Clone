import React from 'react'
import style from '../Css files/navbar.module.css'

export default class Banner extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <>
                <div className={style.banner}>
                    $5 FLAT DOMESTIC SHIPPING
                </div>
            </>
        )
    }
}