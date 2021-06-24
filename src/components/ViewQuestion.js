import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/questions'

class ViewQuestion extends Component {
    state = {
        optionSelected: '',
        showResults: false
    }

    handleChange = (e) => {
        this.setState({ optionSelected: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        const { optionSelected } = this.state
        const { id, dispatch } = this.props
        
        dispatch(handleSaveQuestionAnswer(id, optionSelected))

        this.setState(() => ({
            showResults: true
        }))
    }

    render() {
        const { question, authorAvatar, authorName } = this.props
        const { optionOne, optionTwo } = question
        const { showResults } = this.state

        const o1TotalVotes = question.optionOne.votes.length
        const o2TotalVotes = question.optionTwo.votes.length
        const oTotal = o1TotalVotes + o2TotalVotes
        const o1Percent = o1TotalVotes / oTotal * 100
        const o2Percent = o2TotalVotes / oTotal * 100
        const o1Percentage = o1Percent.toFixed(1) + '%'
        const o2Percentage = o2Percent.toFixed(1) + '%'

        const pBarStyle = {
            height: '25px'
        }
        const optionOnepbar = {
            width: o1Percentage
        }
        const optionTwopbar = {
            width: o2Percentage
        }

        return (
            <div className='container inner-section'>
                <div className="hero">
                    <img src={authorAvatar} alt='' className='img-fluid'/>
                    <h2>{authorName} asks</h2>
                </div>
                <h1>Would You Rather...</h1>
                {
                    !showResults ? 
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
                            >SUBMIT</button>
                        </form>
                    </div>
                )
                : 
                (
                <div>
                    <div className="optionResults">
                        <h3>{optionOne.text}</h3>
                        <div className="progress" style={pBarStyle}>
                            <div className="progress-bar" role="progressbar" style={optionOnepbar}></div>
                        </div>
                        <div className="progress-footer">
                            <div className="total-votes">{`${o1TotalVotes} out of ${oTotal} votes`}</div>
                            <div className="percentage">{o1Percentage}</div>
                        </div>
                    </div>

                    <div className="optionResults">
                        <h3>{optionTwo.text}</h3>
                        <div className="progress" style={pBarStyle}>
                            <div className="progress-bar" role="progressbar" style={optionTwopbar}></div>
                        </div>
                        <div className="progress-footer">
                            <div className="total-votes">{`${o2TotalVotes} out of ${oTotal} votes`}</div>
                            <div className="percentage">{o2Percentage}</div>
                        </div>
                    </div>
                </div>
                )
                }
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
