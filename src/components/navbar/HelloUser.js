import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject(`StartPageStore`)
@observer
class HelloUser extends Component {
  render() {
    return (
      <div className="hello-user" >
        Hello {this.props.StartPageStore.StartPageData.name.value}
      </div>
    )
  }
}

export default HelloUser