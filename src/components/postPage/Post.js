import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TextInput from './TextInput'
import CheckInputs  from './CheckInputs'

@observer
class Post extends Component {
  
    render() {
      return (
        <div className="post">
            <TextInput />
            <CheckInputs />
            <button>Post</button>
        </div>
      );
    }
  }
  
  export default Post;