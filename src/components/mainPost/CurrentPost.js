import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import './../../lib/css/emoji.css'
@inject(`MainPostPageStore`) 
@observer
class CurrentPost extends Component {
    render() {
      return (
        
       <div >Current Post: {this.props.MainPostPageStore.currentMainPost}</div> 
     
     
            
           
       
      )
    }
  }

  export default CurrentPost