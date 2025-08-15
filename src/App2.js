
import React, { Component } from 'react'
// let num = 1




export default class App2 extends Component {
    state = {
        num: 1
    }
    addNum() {
        this.setState({ num: this.state.num + 1 })
    }
    alertNum(num) {
        console.log(num)
        alert(num)
    }

    render() {
        return (
            <div>
                <h2>数字位:{this.state.num}</h2>
                <button onClick={
                    () => this.setState({ num: this.state.num + 1 })
                }>累加</button>
                <button onClick={() => { this.addNum() }}>累加</button>
                <button onClick={this.addNum.bind(this)}>累加</button>
                <button onClick={() => { this.alertNum(this.state.num) }}>alertNum</button>
            </div>
        )
    }
}
