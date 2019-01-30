import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TextInput from './TextInput'

@observer
class CheckInputs extends Component {
  
    render() {
      return (
        <div className="checkbox-inputs">
        </div>
      );
    }
  }
  
  export default CheckInputs;