import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
    render() {
        let todos = this.props.todos
        let items = todos.map(t => (
            <div key={t.id}>
                <TodoItem todo={t}/>
            </div>
        ))
        let emptyList = <div className="task-empty">Your list is empty</div>
        return (
            <div className="task-list">
                {todos.length !== 0 ? items : emptyList}
            </div>
        )
    }
}

export default TodoList
