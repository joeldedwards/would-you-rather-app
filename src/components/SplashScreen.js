import React from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../images/logo.png'
import { Button } from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'

export default function SplashScreen() {

    let history = useHistory()
    const redirect = () => {
        history.push('/signin')
    }

    return (
        <div>
            <div className="splash-screen SplashScreen">
                <img src={logo} alt="" className='logo' />
                <Button 
                variant="contained" 
                className='btn' 
                size='large' 
                color='primary' 
                onClick={redirect}>Sign In <ArrowRightAltIcon /></Button>
            </div>
        </div>
    )
}
