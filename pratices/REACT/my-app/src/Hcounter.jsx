import React from 'react';
import {useCounter} from './hooks'
function Hcounter() {
    var [count,inc,dec]=useCounter()
  return (
    <div className='betterview'>
      <h1>Counter </h1>
      <h1> count = {count}</h1>
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
    </div>
  )
}

export default Hcounter
