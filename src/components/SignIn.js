import React, { Component } from 'react'
import { connect } from 'react-redux'

class SignIn extends Component {
    render() {

        return (
            <div>
                Sign In
            </div>
        )
    }
}


export default connect()(SignIn)