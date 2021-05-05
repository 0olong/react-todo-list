import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
    render() {
        let todos = this.props.todos
        let items = todos.map(t => (
            <React.Fragment key={t.id}>
                <TodoItem todo={t}/>
            </React.Fragment>
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
