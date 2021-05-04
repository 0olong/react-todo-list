import React, { Component } from 'react'
import TodoContext from "./TodoContext"

class TodoAdder extends Component {
    static contextType = TodoContext

    render() {
        return (
            <form onSubmit={this.context.onContextSummit} className="task-form">
            <input
                    className="task-input"
                    onChange={this.context.onContextChange}
                    value={this.props.text}
                    placeholder="Task to be done"
                />
                {/*<button>Add</button>*/}
                <button className="task-button"/>
            </form>
        )
    }
}

export default TodoAdder
