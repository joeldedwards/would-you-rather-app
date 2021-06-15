import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { LoadingBar } from 'react-redux-loading'
// import SplashScreen from './SplashScreen'
import Nav from './Nav'
import Header from './Header'
import SignIn from './SignIn'
import Home from './Home'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'

class App extends Component {
    componentDidMount() {
      this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <Fragment>
                <LoadingBar/>
                <Route path='/signin' component={SignIn} />
                <div className='container'>
                    {
                    this.props.loading === true 
                    ? null 
                    : 
                    <div>
                      <main>
                        <Nav/>
                        <section>
                            <Header/>
                            <article>
                                <Route path='/' exact component={Home} />
                                <Route path='/new' component={NewQuestion} />
                                <Route path='/leaderboard' component={Leaderboard} />
                            </article>
                        </section>
                      </main>
                    </div>
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