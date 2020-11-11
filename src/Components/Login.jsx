import React from 'react'
import style from '../Css files/login.module.css'
import { Redirect } from 'react-router-dom'
import { AppContext } from '../ContextApi/ContextProvider'

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    render() {
        const { email, password } = this.state
        const { handleSubmit, isAuth } = this.context
        return (
            <>

                {isAuth ? (

                    <Redirect to="/shoppingcart" />

                ) : (
                        <div>

                            <h1 className={style.login}>Login</h1>


                            <div className={style.label}> Email  </div>

                            <div style={{ textAlign: "center" }}>
                                <input onChange={this.handleChange} name="email" value={email} className={style.input} />
                            </div>



                            <div className={style.label}> Password </div>

                            <div style={{ textAlign: "center" }}>
                                <input onChange={this.handleChange} name="password" value={password} className={style.input} />
                            </div>

                            <div style={{ textAlign: "center" }}><button onClick={() => handleSubmit(email, password)} className={style.button}>SIGN IN</button></div>

                        </div>
                    )}



            </>
        )
    }
}

Login.contextType = AppContext
export default Login