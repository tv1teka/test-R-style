import { observer } from 'mobx-react-lite';
import React from 'react';
import Store from './store/index'

const Counter = observer(() => {
  return (
    <div>
        {"Count = " + Store.count}
        <div className="buttons">
            <button className="btn" onClick={()=>Store.increment()}>+</button>
            <button className="btn" onClick={()=>Store.decrement()}>-</button>
        </div>
    </div>
  );
  
})

export default Counter;