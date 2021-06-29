import React, { Component } from "react"
import { connect } from "react-redux"
import Question from "./Question"

class Home extends Component {
    render() {

        const { unAnsweredQs, answeredQs } = this.props

        return (
            <div id='homeComponent' className='container inner-section'>
                <h1>Would You Rather...</h1>
                <h2>Answer / View Answered Questions</h2>
                <ul className="nav nav-pills" id="qTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                        className="nav-link active"
                        id="unAnsweredQs-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#unAnsweredQs"
                        type="button"
                        role="tab"
                        aria-controls="unAnsweredQs"
                        aria-selected="true">
                        Unanswered Questions
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                        className="nav-link"
                        id="answeredQs-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#answeredQs"
                        type="button"
                        role="tab"
                        aria-controls="answeredQs"
                        aria-selected="false">
                        Answered Questions
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="qTabContent">
                    <div
                        className="tab-pane fade show active"
                        id="unAnsweredQs"
                        role="tabpanel"
                        aria-labelledby="unAnsweredQs-tab">
                        <ul className='list-unstyled'>
                        {
                            unAnsweredQs.map((id) => (
                                <li key={id}>
                                    <Question id={id} />
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="answeredQs"
                        role="tabpanel"
                        aria-labelledby="answeredQs-tab">
                        <ul className='list-unstyled'>
                        {
                            answeredQs.map((id) => (
                                <li key={id}>
                                    <Question id={id} />
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ questions, users, authedUser }) {
    const user = users[authedUser]
    const answeredQs = Object.keys(user.answers)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    const unAnsweredQs = Object.keys(questions)
        .filter((qid) => !answeredQs.includes(qid))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

    return {
        authedUser,
        answeredQs,
        unAnsweredQs
    }
}

export default connect(mapStateToProps)(Home)
