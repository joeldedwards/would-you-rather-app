import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'

export class Error404 extends Component {
    render() {
        return (
            <div className='container inner-section'>
                <div className='error-404'>
                    <h1>404</h1>
                    <h2>The page you are looking for does not exist!</h2>
                    <Link to='/signin' className='btn'><HomeIcon /> Go Back Home</Link>
                </div>
            </div>
        )
    }
}

export default Error404
