import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleSaveQuestion} from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
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
            optionTwo: '',
            toHome: id ? false : true
        }))
    }

    render() {
        
        const {optionOne, optionTwo, toHome} = this.state

        if(toHome === true) {
            return <Redirect to='/' />
        }

        return (
            <div>
                <h1>Create New Question</h1>
                <form onSubmit={this.handleSubmit}>
                    <h2>Complete the question</h2>
                    <h3>Would you rather...</h3>
                    <input 
                    type='text'
                    onChange={this.handleOptionOneChange}
                    placeholder='Enter Option One Text Here'
                    value={optionOne}
                    className='form-control' />

                    <input 
                    type='text'
                    onChange={this.handleOptionTwoChange}
                    placeholder='Enter Option One Text Here'
                    value={optionTwo}
                    className='form-control' />
                    
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