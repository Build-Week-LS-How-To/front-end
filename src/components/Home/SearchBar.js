import React from 'react';
//Styles
import '../../styles/searchbar.scss';
//Components
import {
    Form,
    Button,
    Card,
    Input
} from 'reactstrap';


export default function SearchBar() {
    return (
        <Card className="searchbar">
            <Form className='searchbar-form'>
                <Input placeholder='Search for Life Hacks' type='text' />
                <Button>Search</Button>
            </Form>
        </Card>
    )
}

