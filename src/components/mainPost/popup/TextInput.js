import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './../../../lib/css/emoji.css'
@inject("PostStore")

@observer
class TextInput extends Component {
    inputHandler = (e) => {
        this.props.PostStore.handleInput(e.target.name, e.target.value)
    }
    render() {
        let inputs = [{
            name: `Image`,
            type: `url`
        }, {
            name: `Text`,
            type: `text`
        }]
        return (
            <div className="text-inputs">
                {inputs.map(anInput => {
                    return (
                        <div  key={anInput.name} className="input-div">
                            <label>{anInput.name}</label>
                            <input 
                                data-emojiable="true"
                                type={anInput.type}
                                onChange={this.inputHandler}
                                value={this.props.PostStore[anInput.name]}
                                name={anInput.name}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default TextInput;