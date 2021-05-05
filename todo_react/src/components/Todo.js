import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoApi from '../api/todo'
import TodoContext from './TodoContext'
import TodoHeader from './TodoHeader'
import './normalize.min.css'
import './todo.css'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.api = new TodoApi()
        this.state = {
            todos: [],
            text: '',
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onUpdate = this.onUpdate.bind(this)
        this.onDelete = this.onDelete.bind(this)
    }

    componentDidMount() {
        this.api.all(r => {
            this.setState({
                todos: r,
            })
        })
    }

    onUpdate(todo) {
        let todos = this.state.todos
        let t = todos.find(e => e.id === todo.id)
        t.done = todo.done
        this.setState({
            todos: todos,
        })
    }

    onDelete(id) {
        let todos = this.state.todos
        let index = todos.findIndex(e => e.id === id)
        todos.splice(index, 1)
        this.setState({
            todos: todos,
        })
    }

    onChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        if (this.state.text.length === 0) {
            return
        }
        let task = this.state.text
        let data = {
            task,
        }
        let todos = this.state.todos
        this.api.add(data, (r) => {
            todos.push(r)
            this.setState({
                todos: todos,
                text: '',
            })
        })
    }

    render() {
        let todos = this.state.todos
        let text = this.state.text
        console.log('todos', todos)
        // let path = this.props.match.path
        let actions = {
            onContextUpdate: this.onUpdate,
            onContextDelete: this.onDelete,
            onContextSummit: this.onSubmit,
            onContextChange: this.onChange,
        }
        return (
            <TodoContext.Provider value={actions}>
                <TodoHeader todos={todos} text={text}/>
                <TodoList todos={todos}/>
            </TodoContext.Provider>
        )
    }
}

export default Todo
