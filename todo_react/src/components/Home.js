import React, { Component } from 'react'
import Menu from './Menu'

class Home extends Component {
    render() {
        let pathname = this.props.match.path
        return (
            <div>
                <Menu path={pathname}/>
                点击上面的链接
            </div>
        )
    }
}

export default Home
