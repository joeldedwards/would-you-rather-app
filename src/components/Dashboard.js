import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import Home from './Home'
// import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import IconButton from '@material-ui/core/IconButton'
import SettingsIcon from '@material-ui/icons/Settings'

class Dashboard extends Component {
    render() {
        const {authedUser} = this.props
        return (
            <div>
                <main>
                    <Nav/>
                    <section>
                        <header>
                            {
                                this.props.users.filter(
                                    user => user.id === authedUser
                                )
                                .map(authedUser => (
                                    `${authedUser.name}`
                                ))
                            }
                            <IconButton color='primary'>
                                <SettingsIcon />
                            </IconButton>
                        </header>
                        <article>
                            <Leaderboard/>
                        </article>
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

export default connect(mapStateToProps)(Dashboard)