import React,{useState} from 'react'


let arr = ['刘备', '关羽', '张飞']


function BackCount() {
  const [count, setCount] = useState(0); // 声明状态变量及其setter函数

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
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
                    <BackCount/>
            </div>
        )
    }
}
export default App
