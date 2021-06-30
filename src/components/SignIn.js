import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'
import logo from '../images/logo.png'
import default1 from '../avatars/default.png'
import IconButton from '@material-ui/core/IconButton'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

class SignIn extends Component {

    state = {
        setUser: '',
        usersArr: this.props.users,
        setUserAvatar: '',
        currentLocation: ''
    }

    changeAuthedUser = (e) => {
        e.preventDefault()

        const setUser = e.target.value

        let setAvatar = this.state.usersArr.find(({id}) => id === setUser)

        if (setAvatar === null || setAvatar === undefined) {
            setAvatar = ''
        }

        this.setState(() => ({
            setUser,
            setUserAvatar: setAvatar.avatarURL
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        const { setUser } = this.state
        const { dispatch, currentLocation } = this.props

        dispatch(setAuthedUser(setUser))

        if (currentLocation === '/signin')
            this.props.history.push('/home')
        else
            this.props.history.push(currentLocation)
        
    }

    render() {
        const { users } = this.props
        const { setUser, setUserAvatar } = this.state
        
        return (
            <div>
                <div className='splash-screen SignIn'>
                    <form onSubmit={this.handleSubmit}>
                        <img src={logo} alt='' className='logo' />
                        <section>
                            <div className='signin__avatar'>
                                <img 
                                src={setUserAvatar ? setUserAvatar : default1} 
                                className='img-fluid' 
                                alt='' />
                            </div>
                            <select 
                                onChange={this.changeAuthedUser} 
                                className='form-select form-select-lg mb-3'>
                                <option value=''>Select Profile</option>
                                {
                                    users.map((user) => (
                                        <option key={user.id} value={user.id}>
                                            {user.name}
                                        </option>
                                    ))
                                }
                            </select>
                            
                            <div className="footer">
                                <h5>Sign in</h5>
                                <IconButton 
                                variant="outlined" 
                                color='primary'
                                disabled={setUser === ''}
                                type='submit'><ArrowForwardIosIcon /></IconButton>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users, authedUser}, props) {

    const currentLocation = props.location.pathname

    return {
        users: Object.keys(users).map((user) => users[user]),
        currentLocation,
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(SignIn))