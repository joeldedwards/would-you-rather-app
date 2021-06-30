import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Question = (props) => {

    const { question, users } = props    
    const { id, author, optionOne } = question

    return (
        <Link to={`/questions/${id}`} className='questionCard'>
            <img src={users[author].avatarURL} alt='' className='img-fluid'/>
            <div className='info'>
                <div className='author'>{`@${author}`}</div>
                <div className='option-1'>{`${optionOne.text}...`}</div>
            </div>
            <ArrowForwardIosIcon/>
        </Link>
    )
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
