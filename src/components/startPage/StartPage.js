import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Axios from 'axios'
// import io from 'socket.io-client'
import Inputs from './Inputs'
import StartPageButton from './StartPageButton';
// import { BrowserRouter as Router, Route,Link, Redirect } from 'react-router-dom'

@inject(`StartPageStore`)
@observer
class StartPage extends Component {
    pageLoader = () => {
        this.props.StartPageStore.updateLocation(this.props.loginPage)
    }
    componentDidMount = () => {
        this.pageLoader()
    }
    render() {
        return (
            <div id="login">
                <Inputs />
                <StartPageButton />
            </div>
        )
    }
}
export default StartPage