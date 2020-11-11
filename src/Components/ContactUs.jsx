import React from 'react'
import style from '../Css files/notFound.module.css'

export default class ContactUs extends React.Component {
    constructor(props) {
        super(props)
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