import React from 'react';
import { Link } from 'react-router-dom'

import { 
    Card, 
    CardTitle, 
    CardText, 
    Row, 
    Col
} from 'reactstrap';

// COMPONENTS
import VoteWidget from './VoteWidget';

// IMAGES
import ImagePlaceholder from '../../images/308x234.png'

const HomeHacksCard = (props) => {

    console.log('props from HomeHacksCard.js', props)

    return(
        <Card left className="homepage-hack" key={props.id}>
            <Row>
                <Col xs="3" className="hack-image-container">
                    <Row>
                        <Col xs="2">
                            <VoteWidget
                                upVote={props.upVote}
                                downVote={props.downVote}
                            />
                        </Col>
                        <Col lg="10">
                            {props.img_url === null ? (
                                <img className="hack-image" src={ImagePlaceholder} alt="placeholder" />
                            ) : (
                                <img className="hack-image" src={props.img_url} alt="placeholder" />
                            )}
                        </Col>
                    </Row>
                </Col>

                <Col auto className="hack-meta-container">
                    <Link to={`/hacks/${props.id}`}>
                        <CardTitle className="dashboard-hack-title">{props.title}</CardTitle>
                    </Link>
                    <CardText className="dashboard-hack-description">{props.description}</CardText>
                    <span>Created By: {props.firstName} {props.lastName}</span>
                </Col>
            </Row>
        </Card>
    )
}

export default HomeHacksCard