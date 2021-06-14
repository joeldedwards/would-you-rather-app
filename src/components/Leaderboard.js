import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

class Leaderboard extends Component {
    render() {
        
        const {scoreStats} = this.props

        return (
            <div className='container inner-section'>
                <LoadingBar />
                <h1>Leaderboard</h1>
                <ul className='list-unstyled'>
                    {
                        scoreStats.map((user) => (
                            <li key={user.id} className='scorecard'>
                                <img src={user.avatarURL} alt={user.id} className='img-fluid' />
                                <span>{user.name}</span>
                                <span>{user.score}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    const scoreStats = Object.values(users)
    .map(user => ({
        id: user.id,
        name: user.name,
        avatarURL: user.avatarURL,
        score: Object.values(user.answers).length + user.questions.length
    }))
    .sort((a, b) => a.score - b.score)
    .reverse()

    return {
        scoreStats
    }
}

export default connect(mapStateToProps)(Leaderboard)