import React, { useState, createContext, useContext } from 'react'

// 创建上下文空间(provider,consumer)
const NumContext = createContext()

// 子组件
function Child() {
    // 直接用解构赋值的方式得到上下文内容
    const { num, setNum } = useContext(NumContext)
    return (
        <>
            <h2>{num}</h2>
            <button onClick={() => { setNum(num + 1) }}>修改num</button>
        </>
        // <NumContext.Consumer>
        //   {
        //     ({ num, setNum }) => (
        //       <>
        //         <h2>{num}</h2>
        //         <button onClick={() => setNum(num + 1)}>修改num</button>
        //       </>
        //     )
        //   }
        // </NumContext.Consumer>
    )
}
// 父组件
function Father() {
    return <Child />
}

// 顶级组件
export default function App8() {
    const [num, setNum] = useState(123)
    return (
        <NumContext.Provider value={{ num, setNum }}>
            <Father />
        </NumContext.Provider>
    )
}
