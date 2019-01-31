import React,{ Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject(`StartPageStore`, `ProfileStore`)
@observer
class Inputs extends Component{
    handleChange = (e) => {
        this.props.StartPageStore.changeStartPageData(e.target.name, e.target.value)
    }
    render () {
        const StartPageData = this.props.StartPageStore.StartPageData
        return (
        <div className="start-page-inputs">
            {Object.keys(StartPageData).map((d, index) => {
                return (
                    <div key={index}>
                        <label>{d}</label>
                        <input
                            type={StartPageData[d].type}
                            name={d}
                            onChange={this.handleChange}
                            placeholder={StartPageData[d].placeholder}
                        >
                        </input>
                    </div>
                )
            })}
        </div>
        )
    }
}


export default Inputs