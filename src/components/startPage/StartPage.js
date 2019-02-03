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
            <div>
                <h1>{this.props.StartPageStore.location}</h1>
                <Inputs />
                <StartPageButton />
            </div>
        )
    }
}
export default StartPage