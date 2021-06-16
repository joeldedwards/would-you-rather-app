import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {

    render() {
        const {question} = this.props
    
        const {
            id, author, optionOne, optionTwo
        } = question

        return (
            <div>
                <Link to={`/question/${id}`}>
                    {author}
                    {optionOne.text}
                    {optionTwo.text}
                </Link>
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions}, {id}) {
    const question = questions[id]

    return {
        authedUser,
        question
    }
}

export default withRouter(connect(mapStateToProps)(Question))
