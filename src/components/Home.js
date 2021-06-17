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
                            <Question id={id} />
                        </li>
                    ))
                }
                </ul>
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser}) {
    return {
        answeredQs: Object.values(questions)
        .filter(question => question.optionOne.votes.includes(authedUser)
        || question.optionTwo.votes.includes(authedUser))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        unAnsweredQs: Object.keys(questions)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        authedUser
    }
}

export default connect(mapStateToProps)(Home)
