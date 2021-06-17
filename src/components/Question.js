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
            <div className='questionCard'>
                <img src={this.props.users[author].avatarURL} alt='' className='img-fluid'/>
                <div className='info'>
                    <div className='author'>{`@${author}`}</div>
                    <div className='option-1'>{`${optionOne.text}...`}</div>
                </div>
                <Link to={`/question/${id}`}><ArrowForwardIosIcon/></Link>
            </div>
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
