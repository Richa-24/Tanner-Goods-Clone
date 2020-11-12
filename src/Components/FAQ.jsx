import React from 'react'
import style from '../Css files/notFound.module.css'

export default class FAQ extends React.Component {

    render() {
        return (
            <>
                <div className={style.notFound1}>404</div>
                <p className={style.notFound2}>Page Not Found</p>
            </>
        )
    }
}