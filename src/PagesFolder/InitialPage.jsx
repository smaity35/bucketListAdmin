import React, { Component } from 'react'

export default class InitialPage extends Component {
    render() {
        return (
            <div className="position-relative bg-dark primeScreen">
                <img src={'https://picsum.photos/1920/1080?random'} alt="" className="w-100 vh-100" style={{ objectFit: 'cover', opacity: '0.4' }} />
                <div className="content">
                    <h1>THE BUCKET LIST</h1>
                </div>
            </div>
        )
    }
}
