import React from 'react'

import {
    Row,
    Col
} from 'reactstrap'

// IMAGES
import ArrowUp from 'bootstrap-icons/icons/arrow-up.svg'
import ArrowDown from 'bootstrap-icons/icons/arrow-down.svg'

const VoteWidget = (props) => {

    return(
        <Col className="vote-widget">
            <Row className="vote-icon-group">
                <img className="vote-icon" style={{color:"blue"}} src={ArrowUp} alt="vote up" />
                <span>{props.upVote}</span>
            </Row>
            <Row className="vote-icon-group">
                <span>{props.downVote}</span>
                <img className="vote-icon" src={ArrowDown} fill="#14jfe3" alt="vote down" />
            </Row>
        </Col>
    )
}

export default VoteWidget