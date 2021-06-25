import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Home extends Component {
    render() {
        return (
            <div className='container inner-section'>
                <ul className='list-unstyled'>
                {
                    this.props.answeredQs.map((id) => (
                        <li key={id}>
                            <Question id={id} voted={true} />
                        </li>
                    ))
                }
                </ul>
            </div>
        )
    }
}

function mapStateToProps({questions, users, authedUser}) {
    const user = users[authedUser]
    const answeredQs = Object.keys(user.answers)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    const unAnsweredQs = Object.keys(questions)
        .filter((qid) => !answeredQs.includes(qid))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

    return {
        authedUser,
        answeredQs,
        unAnsweredQs
    }
}

export default connect(mapStateToProps)(Home)
