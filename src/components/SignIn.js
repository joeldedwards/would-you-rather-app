import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import logo from '../images/logo.png'

class SignIn extends Component {

    state = {
        userAvatar: '',
        toNewQuestion: false
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
        
        const {userAvatar} = this.state

        this.setState(() => ({
            toNewQuestion: userAvatar ? false : true
        }))
    }

    render() {
        const {userAvatar, toNewQuestion} = this.state

        if(toNewQuestion === true) {
            return <Redirect to='/new' />
        }

        return (
            <div>
                <div className='splash-screen SignIn'>
                    <form onSubmit={this.handleSubmit}>
                        <img src={logo} alt='' className='logo' />
                        <section>
                            <h5>Sign In to continue</h5>
                            {
                                this.props.users.filter(
                                    user => user.id === userAvatar
                                )
                                .map(setUser => (
                                    <div key={setUser.id}>
                                        <img src={setUser.avatarURL} className='img-fluid' alt="" />
                                    </div>
                                ))
                            }
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
                        
                        <button
                        type='submit'
                        >Sign In</button>
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