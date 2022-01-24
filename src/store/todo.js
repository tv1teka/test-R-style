import {makeAutoObservable} from "mobx"

class Todo {

    todos =  [
        {id:1, title:"Сделать задание", complete:false},
        {id:2, title:"Пообедать", complete:false},
        {id:3, title:"Лечь спать", complete:false}
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo=> todo.id !== id )
        console.log("removeTodo");
    }

    completeTodo(id) {
        this.todos = this.todos.map(todo=> todo.id === id ? {...todo, complete: !todo.complete} : todo)
        console.log("compiteTodo");
    }
}

export default new Todo();