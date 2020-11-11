import React from 'react'
import axios from 'axios'

export const AppContext = React.createContext()

class ContextProvider extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            maintanner: [],
            tannergoods: [],
            mazamawares: [],
            cartArray: [],
            isAuth: false
        }
    }

    componentDidMount() {
        axios.get("https://api.npoint.io/a64812649cd4a7bfa071/maintanner")
            .then((res) => {
                console.log(res)
                this.setState({
                    maintanner: res.data
                })
            })
            .catch((err) => console.log(err))

        axios.get("https://api.npoint.io/a64812649cd4a7bfa071/tannergoods")
            .then((res) => {
                console.log(res)
                this.setState({
                    tannergoods: res.data
                })
            })

        axios.get("https://api.npoint.io/a64812649cd4a7bfa071/mazamawares")
            .then((res) => {
                console.log(res)
                this.setState({
                    mazamawares: res.data
                })

            })
            .catch((err) => console.log(err))

    }

    handleCart = (data) => {
        this.setState({
            cartArray: [...this.state.cartArray, data]
        })

    }

    handleDelete = (id) => {
        const { cartArray } = this.state;
        const newData = cartArray.filter((list) => list.id !== id);

        this.setState({
            cartArray: newData
        });
    };

    handleSubmit = (email, password) => {

        axios.post("https://reqres.in/api/login", {
            email: email,
            password: password
        })
            .then((res) => {
                this.setState({
                    isAuth: true
                })
            })
            .catch((err) => console.log(err))
    }

    render() {
        const { tannergoods, mazamawares, maintanner, cartArray, isAuth } = this.state
        const { handleCart, handleSubmit, handleDelete } = this

        return (
            <>
                <AppContext.Provider value={{ tannergoods, mazamawares, maintanner, cartArray, isAuth, handleCart, handleSubmit, handleDelete }}>
                    {this.props.children}
                </AppContext.Provider>
            </>
        )
    }
}

export default ContextProvider