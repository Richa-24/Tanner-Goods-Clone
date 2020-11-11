import React from 'react'
import style from '../Css files/notFound.module.css'

export default class Apparel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <>
                <div className={style.notFound1}>404</div>
                <p className={style.notFound2}>Page Not Found</p>
            </>
        )
    }
}