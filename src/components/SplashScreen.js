import React, { Component } from 'react'
import logo from '../images/logo.png'
import { Button } from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'

class SplashScreen extends Component {
    render() {
        return (
            <div>
                <div className="splash-screen SplashScreen">
                    <img src={logo} alt="" className='logo' />
                    <Button variant="contained" className='btn' size='large' color='primary'>Sign In <ArrowRightAltIcon /></Button>
                </div>
            </div>
        )
    }
}

export default SplashScreen