import React, { Component } from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { LoadingBar } from 'react-redux-loading'
import SplashScreen from './SplashScreen'
import SignIn from './SignIn'

class App extends Component {
    componentDidMount() {
      this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <div>
                <LoadingBar/>
                <SignIn/>
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