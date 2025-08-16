import React from 'react'
// 子组件
function Child (props) {
  return <h2>子组件 - {props.num}</h2>
}
// 父组件
function Father (props) {
  return <Child num={props.num} />
}
// 顶级组件
export default function App4 () {
  return (
    <Father num={123456} />
  )
}
