import React from 'react';

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

    return(
        <Card left className="homepage-hack" key={props.id}>
            <Row>
                <Col xs="3" className="hack-image-container">
                    <Row>
                        <Col xs="2">
                            <VoteWidget />
                        </Col>
                        <Col lg="10">
                            <img className="hack-image" src={ImagePlaceholder} alt="placeholder" />
                        </Col>
                    </Row>
                </Col>

                <Col auto className="hack-meta-container">
                    <CardTitle className="dashboard-hack-title">{props.title}</CardTitle>
                    <CardText className="dashboard-hack-description">{props.body}</CardText>
                </Col>
            </Row>

        </Card>
    )
}

export default HomeHacksCard