import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'

@inject(`MainPostPageStore`) 
@observer
class Comments extends Component {
    
    render() {
      return (
        <div className="comments">
            
        </div>
      )
    }
  }

  export default Comments