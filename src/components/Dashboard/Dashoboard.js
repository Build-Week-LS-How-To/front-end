import React from 'react'

import {
    Row,
    Col,
    Card
} from 'reactstrap'

// STYLES
import '../../styles/dashboard.scss'

// COMPONENTS 
import MyHacks from './MyHacks';
import NewHackForm from './NewHackForm';

const Dashboard = () => {
    return(
        <div className="dashboard-container">
            <Row>
                <Col sm="5">
                    <Card className="dashboard-card myhacks">
                        <MyHacks />
                    </Card>
                </Col>

                <Col sm="7">
                    <Card className="dashboard-card newhack">
                        <NewHackForm />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard;