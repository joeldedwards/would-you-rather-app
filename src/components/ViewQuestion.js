import React, { Component } from 'react'
import { connect } from 'react-redux'

class ViewQuestion extends Component {
    render() {
        const {question, authorAvatar, authorName} = this.props
        const {
            optionOne, optionTwo
        } = question

        return (
            <div className='container inner-section'>
                <div className="hero">
                    <img src='' alt='' className='img-fluid'/>
                    <h2>{authorName} asks</h2>
                </div>
                <h1>Would You Rather...</h1>
                <form>
                    <div>
                        <input type='radio' id='option_1' name='q' value='1' />
                        <label htmlFor='option_1'>
                            <p>{optionOne.text}</p>
                        </label>
                    </div>
                    <div>
                        <input type='radio' id='option_2' name='q' value='2' />
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
    const user = users[id]

    return {
        authedUser,
        question: question,
        user: user,
        // authorAvatar: user.avatarURL,
        authorName: question.author
    }
}

export default connect(mapStateToProps)(ViewQuestion)
