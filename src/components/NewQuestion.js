import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleSaveQuestion} from '../actions/questions'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: ''
    }

    handleOptionOneChange = (e) => {
        const optionOne = e.target.value
        
        this.setState(() => ({
            optionOne
        }))
    }

    handleOptionTwoChange = (e) => {
        const optionTwo = e.target.value
        
        this.setState(() => ({
            optionTwo
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const {optionOne, optionTwo} = this.state
        const {dispatch, id} = this.props

        dispatch(handleSaveQuestion(optionOne, optionTwo, id))

        this.setState(() => ({
            optionOne: '',
            optionTwo: ''
        }))
    }

    render() {
        
        const {optionOne, optionTwo} = this.state

        return (
            <div>
                <h3>Create New Question</h3>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type='text'
                    onChange={this.handleOptionOneChange}
                    placeholder='Enter Option One Text Here'
                    value={optionOne} />

                    <input 
                    type='text'
                    onChange={this.handleOptionTwoChange}
                    placeholder='Enter Option One Text Here'
                    value={optionTwo} />
                    
                    <button
                    type='submit'
                    disabled={optionOne && optionTwo === ''}
                    >SUBMIT</button>
                </form>
            </div>
        );
    }
}

export default connect()(NewQuestion)