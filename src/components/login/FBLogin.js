import React, { Component } from 'react'
import FB from 'fb'

class FBLogin extends Component {
    fbstarter = () => {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '2153799438266097',
                cookie: true,
                xfbml: true,
                version: 'v3.2'
            })
            FB.AppEvents.logPageView()
        }
            (function (d, s, id) {
                let js, fjs = d.getElementsByTagName(s)[0]
                if (d.getElementById(id)) { return }
                js = d.createElement(s)
                js.id = id
                js.src = "https://connect.facebook.net/en_US/sdk.js"
                fjs.parentNode.insertBefore(js, fjs)
            }(document, 'script', 'facebook-jssdk'))
    }
    FBLoginstat = () => {
        FB.getLoginStatus(function (response) {
            console.log(response)
        })
    }
    render() {
        this.fbstarter()
        this.FBLoginstat()
        return (
            <div className="App" >
                <FB:login-button
                    scope="public_profile,email"
                    onlogin="checkLoginState();">
                </FB:login-button >
            </div >
        )
    }
}
export default FBLogin