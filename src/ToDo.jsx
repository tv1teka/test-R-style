import { observer } from 'mobx-react-lite';
import React from 'react';
import Todo from './store/todo'

const ToDo = observer(() => {
  return (
    <div>
        {console.log("render")}
        {Todo.todos.map(t => 
            <div className='todo' key={t.id}>
                <input type="checkbox" checked={t.complete} onChange={()=> Todo.completeTodo(t.id)}/>
                {t.title}
                <button onClick={()=> Todo.removeTodo(t.id)}>X</button>
            </div>
            )}
    </div>
  );
  
})

export default ToDo;
