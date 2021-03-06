import {getInitialData} from '../utils/_API'
import {receiveUsers} from '../actions/users'
import {receiveQuestions} from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading'
import { setAuthedUser } from './authedUser'

const authedID = null

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
        .then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(authedID))
            dispatch(hideLoading())
        })
    }
}