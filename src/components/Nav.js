import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import HomeIcon from '@material-ui/icons/Home'
import CreateIcon from '@material-ui/icons/Create'
import ShowChartIcon from '@material-ui/icons/ShowChart'

export default class Nav extends Component {
    render() {
        return (
            <div> 
                <nav>
                    <div className='logo'>
                        <img src={logo} alt='' className='img-fluid logo-img' />
                    </div>
                    <div className="menu">
                        <ul>
                            <li>
                                <Link to='/'><HomeIcon/> Home</Link>
                            </li>
                            <li>
                                <Link to='/new'><CreateIcon/> New Question</Link>
                            </li>
                            <li>
                                <Link to='/leaderboard'><ShowChartIcon/> Leaderboard</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
