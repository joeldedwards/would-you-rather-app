import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { removeAuthedUser } from '../actions/authedUser'
import IconButton from '@material-ui/core/IconButton'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

class Header extends Component {

    handleSignOut = (e) => {
        e.preventDefault()
        
        const {dispatch} = this.props

        dispatch(removeAuthedUser())

        this.setState(() => ({
            authedUser: null,
            toNewQuestion: false,
            toHome: false
        }))
    }

    render() {
        const {authedUser, authedName} = this.props

        if(authedUser === null) {
            return <Redirect to='/signin' />
        }

        return (
            <div>
                <header>
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
        authedUser
    }
}

export default connect(mapStateToProps)(Header)