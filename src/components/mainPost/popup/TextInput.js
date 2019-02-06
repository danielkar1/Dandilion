import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './../../../lib/css/emoji.css'
import EmojiPicker from 'emoji-picker-react';
import { observable } from 'mobx';
@inject("PostStore")

@observer
class TextInput extends Component {
    @observable inputField
    inputHandler = (e) => {
        this.props.PostStore.handleInput(e.target.name, e.target.value)
    }

    // handleEmoji(emojiId, emojiData) {
    //     console.log(emojiData)
    //     console.log(emojiId)
    //     // let emojiPic = jsemoji.replace_colons(':${emoji.name}:')
       
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
                    {/* <EmojiPicker onEmojiClick={this.handleEmoji}/> */}
                    return (
                        <div key={anInput.name} className="input-div">
                            <label>{anInput.name}</label>
                            <input
                                data-emojiable="true"
                                type={anInput.type}
                                onChange={this.inputHandler}
                                value={this.props.PostStore[anInput.name]}
                                name={anInput.name}
                            //  default-value={this.props.inputField}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default TextInput;