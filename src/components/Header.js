import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {

    render() {
        const { authedName, authedAvatar } = this.props

        return (
            <div>
                <header>
                    <img src={authedAvatar} alt='' className='img-fluid avatar-icon'/>
                    <h1>{`Hello, ${authedName}`}</h1>
                </header>
            </div>
        )
    }
}

function mapStateToProps({users, authedUser}) {
    return {
        authedName: users[authedUser].name,
        authedAvatar: users[authedUser].avatarURL,
        authedUser
    }
}

export default connect(mapStateToProps)(Header)