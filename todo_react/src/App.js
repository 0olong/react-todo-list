import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Todo from './components/Todo'
import TodoDetail from './components/TodoDetail'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Route exact path="/">
                        <Redirect to="/todo" />
                    </Route>
                    <Route exact path="/todo" component={Todo} />
                    <Route path="/todo/:id" component={TodoDetail} />
                </div>
            </Router>
        )
    }
}

export default App
