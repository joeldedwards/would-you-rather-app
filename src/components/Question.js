import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class Question extends Component {

    render() {
        const { question } = this.props
    
        const {
            id, author, optionOne
        } = question

        return (
            <Link to={`/questions/${id}`} className='questionCard'>
                <img src={this.props.users[author].avatarURL} alt='' className='img-fluid'/>
                <div className='info'>
                    <div className='author'>{`@${author}`}</div>
                    <div className='option-1'>{`${optionOne.text}...`}</div>
                </div>
                <ArrowForwardIosIcon/>
            </Link>
        )
    }
}

function mapStateToProps({authedUser, questions, users}, {id}) {
    const question = questions[id]

    return {
        authedUser,
        users,
        question
    }
}

export default withRouter(connect(mapStateToProps)(Question))
