import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import SplashScreen from './SplashScreen'
import Nav from './Nav'
import Header from './Header'
import SignIn from './SignIn'
import Home from './Home'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import ViewQuestion from './ViewQuestion'
import Error404 from './Error404'

class App extends Component {
    componentDidMount() {
      this.props.dispatch(handleInitialData())
    }

    render() {

        const { authedUser } = this.props
        
        return (
          <Router>
              <Fragment>
              <Route path='/' exact component={SplashScreen} />
              <div className='container-fluid gx-0'>
                  {
                    authedUser === null 
                    ? ( 
                      <Route path='*' component={SignIn} />
                    ) : 
                    <div>
                      <main>
                        <Nav/>
                        <section>
                            <Header/>
                            <article>
                                <Switch>
                                  <Route path='/home' component={Home} />
                                  <Route path='/add' component={NewQuestion} />
                                  <Route path='/leaderboard' component={Leaderboard} />
                                  <Route path='/questions/:id' component={ViewQuestion} />
                                  <Route path='/404' component={Error404} />
                                </Switch>
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
      authedUser
    }
  }

export default connect(mapStateToProps)(App)