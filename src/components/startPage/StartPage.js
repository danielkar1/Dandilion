import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Inputs from './Inputs';
import StartPageButton from './StartPageButton';

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
                <Inputs/>
                <StartPageButton/>
            </div>
        )
    }
}
export default StartPage