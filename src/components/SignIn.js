import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'
import logo from '../images/logo.png'
import default1 from '../avatars/default.png'
import IconButton from '@material-ui/core/IconButton'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

class SignIn extends Component {

    state = {
        setUser: '',
        toNewQuestion: false
    }

    changeAuthedUser = (e) => {
        e.preventDefault()

        const setUser = e.target.value

        this.setState(() => ({
            setUser
        }))

        console.log(setUser)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        const {setUser} = this.state
        const {dispatch, id} = this.props

        dispatch(setAuthedUser(setUser))

        this.setState(() => ({
            toNewQuestion: id ? false : true
        }))
    }

    render() {
        const {setUser, toNewQuestion} = this.state

        if(toNewQuestion === true) {
            return <Redirect to='/home' />
        }

        return (
            <div>
                <div className='splash-screen SignIn'>
                    <form onSubmit={this.handleSubmit}>
                        <img src={logo} alt='' className='logo' />
                        <section>
                            <div className='signin__avatar'>
                            <img 
                            src={
                                setUser === '' ? (
                                    `${default1}`
                                ) : (
                                    `${this.props.users[0].avatarURL}`
                                )
                            } className='img-fluid' alt='' />
                            </div>
                            <select onChange={this.changeAuthedUser} className='form-select form-select-lg mb-3'>
                            <option value=''>Select Profile</option>
                            {
                                this.props.users.map((user) => (
                                    <option key={user.id} value={user.id}>
                                        {user.name}
                                    </option>
                                ))
                            }
                            </select>
                            
                            <div className="footer">
                                <h5>Sign in</h5>
                                <IconButton 
                                variant="outlined" 
                                color='primary'
                                disabled={setUser === ''}
                                type='submit'><ArrowForwardIosIcon /></IconButton>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users, authedUser}) {
    return {
        users: Object.keys(users).map((user) => users[user]),
        authedUser
    }
}

export default connect(mapStateToProps)(SignIn)