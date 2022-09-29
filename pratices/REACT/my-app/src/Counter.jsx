import React from 'react';
import {useCounter} from './hooks'
function Counter(){
    var [count,inc,dec]=useCounter()
    return(
        <div className='betterview'>
            
            <h1>Counter</h1>
            <div className='count' ></div>
            <h1 className='c'>Count:{count}</h1>
               <button onClick={inc}>inc</button>
               <button onClick={dec}>dec</button>
            
        </div>
    )
}
export default Counter;