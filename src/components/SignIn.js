import React, { Component } from 'react'
import { connect } from 'react-redux'

class SignIn extends Component {
    render() {
        
        return (
            <div>
                <ul>
                {
                    this.props.users.map((user) => (
                        <li key={user.id}>
                            {user.name}
                        </li>
                    ))
                }
                </ul>
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