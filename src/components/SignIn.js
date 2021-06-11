import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import logo from '../images/logo.png'
import { Button } from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'

class SignIn extends Component {

    state = {
        userAvatar: '../avatars/default.png'
    }

    changeAuthedUser = (e) => {
        e.preventDefault()

        const userAvatar = e.target.value

        this.setState(() => ({
            userAvatar
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const {dispatch} = this.props
        dispatch(setAuthedUser(this.state.userAvatar))
    }

    render() {
        const {userAvatar} = this.state

        return (
            <div>
                <div className='splash-screen SignIn'>
                    <form onSubmit={this.handleSubmit}>
                        <img src={logo} alt='' className='logo' />
                        <section>
                            <h5>Sign In to continue</h5>
                            <img src={userAvatar} className='img-fluid' alt="" />
                            <select onChange={this.changeAuthedUser} className='form-select form-select-lg mb-3'>
                            <option>Select Profile</option>
                            {
                                this.props.users.map((user) => (
                                    <option key={user.id} value={user.id}>
                                        {user.name}
                                    </option>
                                ))
                            }
                            </select>
                        </section>
                        <Button variant='contained' className='btn' size='large' color='primary'>Sign In <ArrowRightAltIcon /></Button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users: Object.keys(users).map((user) => users[user])
    }
}

export default connect(mapStateToProps)(SignIn)