import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../images/logo.png'
import { Button } from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import Avatar from '@material-ui/core/Avatar';

class SignIn extends Component {
    render() {
        
        return (
            <div>
                <div className="splash-screen SignIn">
                    <img src={logo} alt="" className='logo' />
                    <h3>Sign In to continue</h3>
                    <ul>
                    {
                        this.props.users.map((user) => (
                            <li key={user.id}>
                                {user.name}
                                <Avatar alt={user.name} src={user.avatarURL} />
                            </li>
                        ))
                    }
                    </ul>
                    <Button variant="contained" className='btn' size='large' color='primary'>Sign In <ArrowRightAltIcon /></Button>
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