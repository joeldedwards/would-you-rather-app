import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../images/logo.png'
import { Button } from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'

class SignIn extends Component {
    render() {
        
        return (
            <div>
                <div className='splash-screen SignIn'>
                    <img src={logo} alt='' className='logo' />
                    <section>
                        <h5>Sign In to continue</h5>
                        <select className='form-select form-select-lg mb-3'>
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
                </div>
            </div>
        )
    }
}

function mapStateToProps({users, authedUser}) {
    return {
        authedUser,
        users: Object.keys(users).map((user) => users[user])
    }
}

export default connect(mapStateToProps)(SignIn)