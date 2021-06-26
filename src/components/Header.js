import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleSignOut } from '../actions/authedUser'
import IconButton from '@material-ui/core/IconButton'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

class Header extends Component {

    handleSignOut = (e) => {
        e.preventDefault()
        
        const { dispatch } = this.props

        dispatch(handleSignOut())

        this.setState(() => ({
            authedUser: null
        }))

        this.props.history.push('/signin')
    }

    render() {
        const { authedName, authedAvatar } = this.props

        return (
            <div>
                <header>
                    <img src={authedAvatar} alt='' className='img-fluid avatar-icon'/>
                    <h1>{`Hello, ${authedName}`}</h1>
                    <IconButton 
                    color='primary' 
                    onClick={this.handleSignOut}>
                        <ExitToAppIcon />
                    </IconButton>
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

export default withRouter(connect(mapStateToProps)(Header))