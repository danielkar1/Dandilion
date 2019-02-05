import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Inputs from './../startPage/Inputs'
import StartPageButton from './../startPage/StartPageButton';

@inject(`StartPageStore`)
@observer
class Login extends Component {
  
  render() {
    return (
     
      <div id="loginContainer" >
     <div> <Inputs /></div>
     <span> <StartPageButton /> </span>
        </div>
    )  
  }
}

export default Login

