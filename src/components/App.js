import React, { Component } from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import logo from '../images/logo.png'
import { Button } from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import SignIn from './SignIn'

class App extends Component {
    componentDidMount() {
      this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <div>
                <div className="splash-screen">
                    <img src={logo} alt="" className='logo' />
                    <SignIn />
                    <Button variant="contained" className='btn' size='large' color='primary'>Sign In <ArrowRightAltIcon /></Button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
      loading: authedUser === null
    }
  }

export default connect(mapStateToProps)(App)