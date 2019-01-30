import React, { Component } from 'react';


class Profile extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
      disabled: ''
    }
    this.popup = null
  }

  componentDidMount() {
    socket.on('user', user => {
      this.popup.close()
      this.setState({ user })
    })
  }

  checkPopup() {
    const check = setInterval(() => {
      const { popup } = this
      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(check)
        this.setState({ disabled: '' })
      }
    }, 1000)
  }

  // Launches the popup on the server and passes along the socket id so it 
  // can be used to send back user data to the appropriate socket on 
  // the connected client.
  openPopup() {
    const width = 600, height = 600
    const left = (window.innerWidth / 2) - (width / 2)
    const top = (window.innerHeight / 2) - (height / 2)

    const url = `${API_URL}/twitter?socketId=${socket.id}`

    return window.open(url, '',
      `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
    )
  }

  // Kicks off the processes of opening the popup on the server and listening 
  // to the popup. It also disables the login button so the user can not 
  // attempt to login to the provider twice.
  startAuth() {
    if (!this.state.disabled) {
      this.popup = this.openPopup()
      this.checkPopup()
      this.setState({ disabled: 'disabled' })
    }
  }

  closeCard() {
    this.setState({ user: {} })
  }
    render() {
      return (
        <div className="profile">
            profile
        </div>
      );
    }
  }
  
  export default Profile;