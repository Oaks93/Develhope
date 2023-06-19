import React, { Component } from 'react'

export default class Counterclass extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0, data: null }
    }

    componentDidMount() {

        const data = "fetched data"
        this.setState({ data })

    }
    increment = () => {
        this.setState(() => ({
            count: this.state.count + 1
        }))

    }
    decrement = () => {
        this.setState((prevCount) => ({
            count: prevCount.count - 1
        }))

    }


    render() {
        return (
            <>
                <h1>{this.state.data}</h1>
                <h2>Count: {this.state.count}</h2>
                <button onClick={() => this.increment()}>+</button>
                <button onClick={() => this.decrement()}>-</button>
            </>
        )
    }
}
