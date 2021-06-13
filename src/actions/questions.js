import {saveQuestion} from '../utils/_API'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function addQuestion(question) {
    return {
        type: SAVE_QUESTION,
        question
    }
}

export function handleSaveQuestion(optionOne, optionTwo) {
    return(dispatch, getState) => {
        const {authedUser} = getState()

        dispatch(showLoading())

        return saveQuestion({
            optionOneText: optionOne, 
            optionTwoText: optionTwo, 
            author: authedUser
        })
        .then((question) => dispatch(addQuestion(question)))
        .then(() => dispatch(hideLoading()))
    }
}