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
          <HelloUser /> :
          <div>
            <Inputs />
            <span> <StartPageButton location='login'/> </span>
          </div>
            }
      </div>
    )
        }
      }
      
      export default Login
      
