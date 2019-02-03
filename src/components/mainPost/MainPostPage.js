import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { inject, observer } from 'mobx-react'

@inject(`MainPostPageStore`)
@observer
class MainPostPage extends Component {
    openModal() {
        this.props.MainPostPageStore.newPostPopUp.visible = true;
    }
    closeModal() {
        this.props.MainPostPageStore.newPostPopUp.visible = false;
    }
    render() {
        const popUpSettings = this.props.MainPostPageStore.newPostPopUp.visible
        return (
            <div className="main-post">
                <div onClick={() => this.openModal()}>Create New Post</div>
                <Modal visible={popUpSettings} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>new post</div>
                </Modal>
            </div>
        )
    }  
}

export default MainPostPage;