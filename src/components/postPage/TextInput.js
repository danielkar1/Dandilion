import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
@inject("PostStore")

@observer
class TextInput extends Component {
    inputHandler = (e) => {
        this.props.postStore.handleInput(e.target.name, e.target.value)   
      }
    render() {
        return (
            <div className="text-inputs">
                <label>Image</label>
                <input type="url" onChange={this.inputHandler} name="image"></input>
                <label>Text</label>
                <input type="text" onChange={this.inputHandler} name="text"></input>
            </div>
        )
    }
}

export default TextInput;