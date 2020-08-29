import React from 'react';
import { Card, CardTitle, CardText, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import EditIcon from 'bootstrap-icons/icons/pencil-square.svg'
import DeleteIcon from 'bootstrap-icons/icons/trash-fill.svg'

const MyHacksCard = (props) => {


    
    return(
        <Card className="dashboard-hack" key={props.id}>

            <CardTitle className="dashboard-hack-title">{props.title}</CardTitle>
            <CardText className="dashboard-hack-description">{props.body}</CardText>
           <CardText className="dashboard-hack-description"> step 1:{props.stepone}</CardText>
            <CardText className="dashboard-hack-description">step 2:{props.steptwo}</CardText>
            <CardText className="dashboard-hack-description">step 3:{props.stepthree}</CardText>

            <CardFooter className="dashboard-hack-footer">
                <div>User Id: {props.userId}</div>

                <div className="icons">
                    <Link to = '/edithack'><img src={EditIcon} alt="edit button" className="hackIcon editButton" /></Link>
                    <img src={DeleteIcon} alt="delete button" className="hackIcon deleteButton" />
                </div>
            </CardFooter>

        </Card>
    )
}

export default MyHacksCard