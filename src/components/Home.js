import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
// import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import IconButton from '@material-ui/core/IconButton'
import SettingsIcon from '@material-ui/icons/Settings'

class Home extends Component {
    render() {
        const {authedUser} = this.props
        return (
            <div>
                <main>
                    <Nav/>
                    <section>
                        <header>
                            {authedUser}
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

export default connect(mapStateToProps)(Home)