import React, { Component } from 'react'
import TodoAdder from "./TodoAdder"

class TodoHeader extends Component {
    render() {
        let todos = this.props.todos
        let text = this.props.text
        return (
            <div className="task-header">
                <h1 className="task-header-title">Todo List</h1>
                <div className="task-tools">
                    <div className="task-count">{todos.length} tasks</div>
                </div>
                <TodoAdder todos={todos} text={text}/>
            </div>
        )
    }
}

export default TodoHeader
