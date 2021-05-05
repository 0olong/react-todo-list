import React, {PureComponent} from 'react'
import TodoApi from '../api/todo'
import TodoContext from './TodoContext'

class TodoItem extends PureComponent {
    constructor(props) {
        super(props)
        this.api = new TodoApi()
        let {task, id, done} = this.props.todo
        this.state = {
            editing: false,
            text: task,
            todo: {
                task,
                id,
                done,
            }
        }
        console.log('TodoItem', props)
    }

    static contextType = TodoContext

    onEdit = () => {
        this.setState({
            editing: true,
        })
    }

    onDelete = () => {
        let {id} = this.state.todo
        let todoId = String(id)
        console.log('onDelete', this.state, id)
        this.api.delete(todoId, (r) => {
            let func = this.context.onContextDelete
            func(id)
        })
    }

    updateTodo(todoId, data) {
        this.api.update(todoId, data, (r) => {
            this.setState({
                todo: r,
                editing: false,
            })
            this.updateCounter()
        })
    }

    onSubmit = () => {
        let {id} = this.state.todo
        let text = this.state.text
        let todoId = String(id)
        let data = {
            task: text
        }
        this.updateTodo(todoId, data,)
    }

    onCancel = () => {
        this.setState({
            editing: false,
        })
    }

    onChange = (e) => {
        this.setState({
            text: e.target.value,
        })
    }

    updateCounter() {
        // let func = this.props.onUpdate
        let func = this.context.onContextUpdate
        func(this.state.todo)
    }

    toggleComplete = () => {
        let {id, done} = this.state.todo
        let data = {
            done: !done,
        }
        let todoId = String(id)
        this.updateTodo(todoId, data)
    }

    render() {
        let {id, task, done} = this.state.todo
        let todo = null

        if (this.state.editing) {
            todo = (
                <React.Fragment>
                    <input className="task-name" type="text" value={this.state.text} onChange={this.onChange}/>
                    <button onClick={this.onSubmit}>Commit</button>
                    <button onClick={this.onCancel}>Cancel</button>
                </React.Fragment>
            )
        } else {
            todo = (
                <React.Fragment>
                    <input className="task-status" type="checkbox" defaultChecked={done} onClick={this.toggleComplete}/>
                    <label className="task-name">{task}</label>
                    <button className="task-edit" onClick={this.onEdit}/>
                    <button className="task-delete" onClick={this.onDelete}/>
                </React.Fragment>
            )
        }
        let cls = done ? 'is-completed' : ''
        return (
            <div className={`task-item ${cls}`}>
                {todo}
                {/*<input className="task-status" type="checkbox" defaultChecked={done} onClick={this.toggleComplete}/>*/}
                {/*<label className="task-name">{task}</label>*/}
                {/*<button onClick={this.onEdit}>编辑</button>*/}
                {/*<button className="task-delete" onClick={this.onDelete}/>*/}
            </div>
        )
    }
}

export default TodoItem
