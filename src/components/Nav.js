import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { handleSignOut } from '../actions/authedUser'
import logo from '../images/logo.png'
import HomeIcon from '@material-ui/icons/Home'
import CreateIcon from '@material-ui/icons/Create'
import ShowChartIcon from '@material-ui/icons/ShowChart'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

class Nav extends Component {

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
        return (
            <nav>
                <div className='logo'>
                    <img src={logo} alt='' className='img-fluid logo-img' />
                </div>
                <div className='menu'>
                    <ul className='list-unstyled'>
                        <li>
                            <NavLink to='/home'><HomeIcon/> <span>Home</span></NavLink>
                        </li>
                        <li>
                            <NavLink to='/add'><CreateIcon/> <span>New Question</span></NavLink>
                        </li>
                        <li>
                            <NavLink to='/leaderboard'><ShowChartIcon/> <span>Leaderboard</span></NavLink>
                        </li>
                        <li>
                            <NavLink to='/signin' onClick={this.handleSignOut}><ExitToAppIcon/> <span>Sign Out</span></NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(Nav))