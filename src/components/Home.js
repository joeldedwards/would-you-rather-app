import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../images/logo.png'

class Home extends Component {
    render() {
        const {authedUser} = this.props
        return (
            <div>
                <main>
                    <nav>
                        <div className='logo'>
                            <img src={logo} alt='' className='logo' />
                        </div>
                        <div className="menu">
                            MENU
                        </div>
                        <div className="auth-user">
                            {authedUser}
                        </div>
                    </nav>
                    <section>
                        DASHBOARD
                    </section>
                </main>                
            </div>
        )
    }
}

function mapStateToProps({users, authedUser}) {
    return {
        authedUser,
        users: Object.keys(users).map((user) => users[user])
    }
}

export default connect(mapStateToProps)(Home)