import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import HomeIcon from '@material-ui/icons/Home'
import CreateIcon from '@material-ui/icons/Create'
import ShowChartIcon from '@material-ui/icons/ShowChart'
import NewQuestion from './NewQuestion'

class Home extends Component {
    render() {
        const {authedUser} = this.props
        return (
            <div>
                <main>
                    <nav>
                        <div className='logo'>
                            <img src={logo} alt='' className='img-fluid logo-img' />
                        </div>
                        <div className="menu">
                            <ul>
                                <li>
                                    <Link to='/'><HomeIcon/> Home</Link>
                                </li>
                                <li>
                                    <Link to='/'><CreateIcon/> New Question</Link>
                                </li>
                                <li>
                                    <Link to='/'><ShowChartIcon/> Leaderboard</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="auth-user">
                            {authedUser}
                        </div>
                    </nav>
                    <section>
                        <NewQuestion />
                    </section>
                </main>                
            </div>
        )
    }
}

function mapStateToProps({users, authedUser}) {
    return {
        authedUser,
        users: Object.keys(users).map((user) => users[user])
    }
}

export default connect(mapStateToProps)(Home)