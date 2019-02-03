import React, { Component } from 'react'
class StartPageButton extends Component {
    login=()=>{
    }
    render() {
        // console.log(this.props.location.pathname)
        return (
            <button onClick={this.login}>button</button>
        )
    }
}
export default StartPageButton