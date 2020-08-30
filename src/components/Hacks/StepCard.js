import React from 'react';

import Placeholder from '../../images/308x234.png'
import { Card, CardBody, Row, Col } from 'reactstrap';
const StepCard = (props) => {
    return(
        <div className="hack-step">
            <h1 className="step-number">{props.step}:</h1>
            <Card className="hack-step-card">
                <CardBody>
                    <Row>
                        <Col xs="4">
                            <img src={Placeholder} alt="placeholder" className="step-image" />
                        </Col>
                        <Col auto>
                            <p className="step-description">{props.stepDescription}</p>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    )
}

export default StepCard