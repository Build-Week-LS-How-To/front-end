import React from 'react';
import { Card, CardTitle, CardText, CardFooter } from 'reactstrap';

const MyHacksCard = (props) => {

    return(
        <Card>
            <CardTitle>Card Title</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <CardFooter>
                <div>
                    2 Days Ago
                </div>
            </CardFooter>
        </Card>
    )
}

export default MyHacksCard