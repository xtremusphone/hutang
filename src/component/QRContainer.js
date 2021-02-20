import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'

export default class QrContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            result: 'Hold steady to scan QRHutang'
        }
        this.handleScan = this.handleScan.bind(this)
    }

    handleScan(result){
        this.setState({
            result: result
        })
    }

    handleError(error){
        console.error(error)
    }

    render(){

        const previewStyle = {
            height: 900,
            width: 700,
            display: 'flex',
            "justify-content" : "center"
        }

        const camStyle = {
            display: 'flex',
            justifyContent: "center",
            marginTop: '-50px'
        }

        return(
            <React.Fragment>
                <div style={camStyle}>
                    <QrReader 
                        delay={100}
                        style={previewStyle}
                        onError={this.handleError}
                        onScan={this.handleScan}/>
                </div>
                <p>this.state.result</p>
            </React.Fragment>
        )
    }
}
