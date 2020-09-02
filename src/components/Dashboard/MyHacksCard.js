import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../../utils/axiosWithAuth'

// ICONS
import React from 'react';
import { Card, CardTitle, CardText, CardFooter } from 'reactstrap';
import {Link} from 'react-router-dom';
import EditIcon from 'bootstrap-icons/icons/pencil-square.svg'
import DeleteIcon from 'bootstrap-icons/icons/trash-fill.svg'

// COMPONENTS
import { Card, CardTitle, CardText, CardFooter } from 'reactstrap';


const MyHacksCard = (props) => {

    console.log(props)

    const history = useHistory()

    const handleDelete =()=> {
        axiosWithAuth()
            .delete(`https://how-to-1.herokuapp.com/api/howTo/${props.id}`)
            .then( res => {
                console.log(res.data);
                window.location.reload()
            })
            .catch( err => {
                console.error(err.message)
            })
    }

    return(
        <Card className="dashboard-hack" key={props.id}>

            <CardTitle className="dashboard-hack-title">{props.title}</CardTitle>
            <CardText className="dashboard-hack-description">{props.description}</CardText>

            <CardFooter className="dashboard-hack-footer">
                <div>Submitted By: {props.userID} </div>

                <div className="icons">
                    <Link to ={`/edithack/${props.id}`} >
                    <img src={EditIcon} alt="edit button" className="hackIcon editButton" />
                    <img
                        src={DeleteIcon}
                        onClick={handleDelete}
                        style={{cursor:"pointer"}}
                        alt="delete button"
                        className="hackIcon deleteButton"
                    />
                    </Link>
                    <img src={DeleteIcon} alt="delete button" className="hackIcon deleteButton" />
                </div>
            </CardFooter>

        </Card>
    )
}

export default MyHacksCard