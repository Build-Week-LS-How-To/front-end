import React from 'react';
import { Card, CardTitle, CardText, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import EditIcon from 'bootstrap-icons/icons/pencil-square.svg'
import DeleteIcon from 'bootstrap-icons/icons/trash-fill.svg'
import { useParams,useHistory} from "react-router-dom";

const MyHacksCard = (props) => {
    return(
        <Card className="dashboard-hack" key={props.id}>

            <CardTitle className="dashboard-hack-title">{props.title}</CardTitle>
            <CardText className="dashboard-hack-description">{props.description}</CardText>

            <CardFooter className="dashboard-hack-footer">
                <div>Submitted By: {props.userID} </div>

                <div className="icons">
                    <Link to ={`/edithack/${props.UserID}`}><img src={EditIcon} alt="edit button" className="hackIcon editButton" /></Link>
                    <img src={DeleteIcon} alt="delete button" className="hackIcon deleteButton" />
                </div>
            </CardFooter>

        </Card>
    )
}

export default MyHacksCard