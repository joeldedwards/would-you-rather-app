import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { LoadingBar } from 'react-redux-loading'
// import SplashScreen from './SplashScreen'
import SignIn from './SignIn'
import Home from './Home'

class App extends Component {
    componentDidMount() {
      this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <Fragment>
                <LoadingBar/>
                <div className='container'>
                    <Route path='/' exact component={SignIn} />
                    {
                    this.props.loading === true 
                    ? null 
                    : <div><Route path='/new' component={Home} /></div>
                    }
                </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
      loading: authedUser === null
    }
  }

export default connect(mapStateToProps)(App)