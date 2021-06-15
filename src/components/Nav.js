import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import HomeIcon from '@material-ui/icons/Home'
import CreateIcon from '@material-ui/icons/Create'
import ShowChartIcon from '@material-ui/icons/ShowChart'

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <div className='logo'>
                    <img src={logo} alt='' className='img-fluid logo-img' />
                </div>
                <div className='menu'>
                    <ul className='list-unstyled'>
                        <li>
                            <NavLink to='/home'><HomeIcon/> Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/new'><CreateIcon/> New Question</NavLink>
                        </li>
                        <li>
                            <NavLink to='/leaderboard'><ShowChartIcon/> Leaderboard</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
