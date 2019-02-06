import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Inputs from './../startPage/Inputs'
import StartPageButton from './../startPage/StartPageButton';
import HelloUser from './HelloUser'

@inject(`StartPageStore`)
@observer
class Login extends Component {
  render() {
    return (
      <div id="loginContainer" >
        {this.props.StartPageStore.internalId ?
            <HelloUser /> : <>
            <Inputs />
            <StartPageButton location='login'/>
            </>
          }
    {/* // </div> */}
          {/* // <div className= "inputs-"> */}
      </div>
    )
  }
}
      
      export default Login
      
