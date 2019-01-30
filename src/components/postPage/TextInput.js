import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
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
                        <span key={anInput.name}>
                            <label>{anInput.name}</label>
                            <input
                                type={anInput.type}
                                onChange={this.inputHandler}
                                name={anInput.name}
                            />
                        </span>
                    )
                })}
            </div>
        )
    }
}

export default TextInput;