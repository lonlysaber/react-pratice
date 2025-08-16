import React, { useState, useEffect } from 'react';

function BackCount() {
  const [num1, setNum1] = useState(1)
  const [num2, setNum2] = useState(1)
  useEffect(() => {
    console.log('num1更新了', num1, num2);
    return () => {
      console.log('销毁阶段')
    }
  },[num1,num2])
  return (
    <>
      <div>num1:{num1}</div>
      <button onClick={() => setNum1(num1 + 1)} >累加</button>
      <div>num2:{num2}</div>
      <button onClick={() => setNum2(num2 + 1)} >累加</button>
    </>
  )

}


export default BackCount