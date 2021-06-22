import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/questions'

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
        const { id, authedUser, dispatch } = this.props
        
        dispatch(handleSaveQuestionAnswer(authedUser, id, optionSelected))
    }

    render() {
        const { question, authorAvatar, authorName } = this.props
        const { optionOne, optionTwo } = question

        return (
            <div className='container inner-section'>
                <div className="hero">
                    <img src={authorAvatar} alt='' className='img-fluid'/>
                    <h2>{authorName} asks</h2>
                </div>
                <h1>Would You Rather...</h1>
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
                    >SUBMIT</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, props) {
    const {id} = props.match.params
    const question = questions[id]
    const user = users[question.author]
    
    return {
        id,
        authedUser,
        question: question,
        user: user,
        authorAvatar: user.avatarURL,
        authorName: user.name
    }
}

export default connect(mapStateToProps)(ViewQuestion)
