import React from 'react'

let arr = ['刘备', '关羽', '张飞']
// 类组件
class App extends React.Component {
    render() {
        return (
            <div>
                <h2>hello world!</h2>
                <input type="text" />
                <ul>
                    {
                        arr.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>

            </div>
        )
    }
}
export default App
