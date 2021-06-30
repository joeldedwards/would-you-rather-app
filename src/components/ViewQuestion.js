import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/questions'
import VoteResult from './VoteResult'

class ViewQuestion extends Component {
    state = {
        optionSelected: ''
    }

    handleChange = (e) => {
        this.setState({ optionSelected: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        const { optionSelected } = this.state
        const { id, dispatch } = this.props
        
        dispatch(handleSaveQuestionAnswer(id, optionSelected))
    }

    render() {
        const { optionSelected } = this.state
        const { id, voted, question, authorAvatar, authorName } = this.props
        const { optionOne, optionTwo } = question
        
        return (
            <div className='container inner-section'>
                <div className='hero'>
                    <img src={authorAvatar} alt='' className='img-fluid'/>
                    <h2>{authorName} {!voted ? 'asks' : 'asked'}</h2>
                </div>
                <h1>Would You Rather...</h1>
                {
                    !voted ? 
                (
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <input 
                                type='radio' 
                                id='option_1' 
                                name='q' 
                                value='optionOne'
                                onChange={this.handleChange} />
                                <label htmlFor='option_1'>
                                    <p>{optionOne.text}</p>
                                </label>
                            </div>
                            <div>
                                <input 
                                type='radio' 
                                id='option_2' 
                                name='q' 
                                value='optionTwo'
                                onChange={this.handleChange} />
                                <label htmlFor='option_2'>
                                    <p>{optionTwo.text}</p>
                                </label>
                            </div>
                            <button
                            type='submit'
                            className='btn'
                            disabled={optionSelected === null || optionSelected === ''}
                            >SUBMIT</button>
                        </form>
                    </div>
                ) : ( 
                    <VoteResult id={id} />
                )}
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, props) {
    const {id} = props.match.params
    const question = questions[id]
    const user = users[question.author]
    const loggedUser = users[authedUser]
    
    return {
        id,
        authedUser,
        question: question,
        user: user,
        authorAvatar: user.avatarURL,
        authorName: user.name,
        voted: Object.keys(loggedUser.answers).includes(id)
    }
}

export default connect(mapStateToProps)(ViewQuestion)
