import { saveQuestion, saveQuestionAnswer } from '../utils/_API'
import { addAnswerToUser, addQuestionToUser } from '../actions/users'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

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

function addQuestionAnswer({ authedUser, qid, answer }) {
    return {
        type: SAVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
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
        .then((question) => {
            dispatch(addQuestion(question))
            dispatch(addQuestionToUser(question))
        })
        .then(() => dispatch(hideLoading()))
    }
}

export function handleSaveQuestionAnswer(qid, answer) {
    return(dispatch, getState) => {
        const {authedUser} = getState()
        
        dispatch(showLoading())

        return saveQuestionAnswer({
            authedUser,
            qid,
            answer
        })
        .then(() => {
            dispatch(addQuestionAnswer({ authedUser, qid, answer }))
            dispatch(addAnswerToUser({ authedUser, qid, answer }))
        })
        .then(() => dispatch(hideLoading()))
    }
}