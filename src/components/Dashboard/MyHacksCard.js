import React from 'react';
import { Card, CardTitle, CardText, CardFooter } from 'reactstrap';

import EditIcon from 'bootstrap-icons/icons/pencil-square.svg'
import DeleteIcon from 'bootstrap-icons/icons/trash-fill.svg'

const MyHacksCard = (props) => {

    return(
        <Card className="dashboard-hack" key={props.id}>

            <CardTitle className="dashboard-hack-title">{props.title}</CardTitle>
            <CardText className="dashboard-hack-description">{props.body}</CardText>

            <CardFooter className={`${"dashboard-hack-footer", props.userId}`}>
                <div>User Id: {props.userId}</div>

                <div className="icons">
                    <img src={EditIcon} alt="edit button" className="hackIcon editButton" />
                    <img src={DeleteIcon} alt="delete button" className="hackIcon deleteButton" />
                </div>
            </CardFooter>

        </Card>
    )
}

export default MyHacksCard