import React, { Component } from 'react'
import { connect } from 'react-redux'

class VoteResult extends Component {
    render() {
        const { question } = this.props
        const { optionOne, optionTwo } = question

        const o1TotalVotes = question.optionOne.votes.length
        const o2TotalVotes = question.optionTwo.votes.length
        const oTotal = o1TotalVotes + o2TotalVotes
        const o1Percent = o1TotalVotes / oTotal * 100
        const o2Percent = o2TotalVotes / oTotal * 100
        const o1Percentage = o1Percent.toFixed(1) + '%'
        const o2Percentage = o2Percent.toFixed(1) + '%'

        const pBarStyle = {
            height: '25px'
        }
        const optionOnepbar = {
            width: o1Percentage
        }
        const optionTwopbar = {
            width: o2Percentage
        }
        return (
            <div>
                <div className="optionResults">
                    <h3>{optionOne.text}</h3>
                    <div className="progress" style={pBarStyle}>
                        <div className="progress-bar" role="progressbar" style={optionOnepbar}></div>
                    </div>
                    <div className="progress-footer">
                        <div className="total-votes">{`${o1TotalVotes} out of ${oTotal} votes`}</div>
                        <div className="percentage">{o1Percentage}</div>
                    </div>
                </div>

                <div className="optionResults">
                    <h3>{optionTwo.text}</h3>
                    <div className="progress" style={pBarStyle}>
                        <div className="progress-bar" role="progressbar" style={optionTwopbar}></div>
                    </div>
                    <div className="progress-footer">
                        <div className="total-votes">{`${o2TotalVotes} out of ${oTotal} votes`}</div>
                        <div className="percentage">{o2Percentage}</div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, {id}) {
    
    const question = questions[id]
    const user = users[question.author]
    
    return {
        id,
        authedUser,
        question: question,
        user: user
    }
}

export default connect(mapStateToProps)(VoteResult)
