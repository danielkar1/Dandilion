import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TextInput from './TextInput'
import CheckInputs from './CheckInputs'

@observer
class Post extends Component {
  clickFunc = () => {
    let user = this.state.user
    let url = `${API_URL}/twitter/post?socketId=${socket.id}`
    Axios.post(url, {
      accessToken: user.accessToken,
      refreshToken: user.refreshToken,
      text: `this is diffrent text`
    })
      .then(res => console.log(res))
  }
  render() {
    return (
      <div className="post">
        <TextInput />
        <CheckInputs />
        <div className={'container'}>
          {/* Show the user if it exists. Otherwise show the login button */}
          {name
            ? <div className={'card'}>
              <img src={photo} alt={name} />
              <FontAwesome
                name={'times-circle'}
                className={'close'}
                onClick={this.closeCard.bind(this)}
              />
              <h4>{`@${name}`}</h4>
            </div>
            : <div className={'button'}>
              <button
                onClick={this.startAuth.bind(this)}
                className={`twitter ${disabled}`}
              >
                <FontAwesome
                  name={'twitter'}
                />button
            </button>
            </div>
          }
          <button onClick={this.clickFunc}> post </button>
          {/* <Footer /> */}
        </div>
        <button>Post</button>
      </div>
    )
  }
}

export default Post;