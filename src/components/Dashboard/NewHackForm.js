import React from 'react';

// REDUX
import { connect } from 'react-redux'
import {
    addHack,
    onTitleChange,
    onDescriptionChange,
    onStepOneChange,
    onStepTwoChange,
    onStepThreeChange,
    userid
} from '../../actions/newHack'

// COMPONENTS
import {
    Form,
    Input,
    FormGroup,
    Button,
    Label,
} from 'reactstrap'

const NewHackForm = ({
    values,
    onTitleChange,
    onDescriptionChange,
    onStepOneChange,
    onStepTwoChange,
    onStepThreeChange,
    addHack
}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        addHack(values)
    }
    
    return(
        <div>
            <h2>New Life Hack</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input
                        type="text"
                        name="title"
                        required
                        value={values.title}
                        onChange={ onTitleChange }
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="description">Short Description</Label>
                    <Input
                        type="textarea"
                        name="description"
                        required
                        value={values.description}
                        onChange={ onDescriptionChange }
                    />
                </FormGroup>
                
                <FormGroup className="stepOne">
                    <Label for="step1">Step 1</Label>
                    <Input
                        type="textarea"
                        name="step1"
                        required
                        value={values.stepOneDescription}
                        onChange={ onStepOneChange }
                    />
                </FormGroup>

                <FormGroup className="stepTwo">
                    <Label for="step2">Step 2</Label>
                    <Input
                        type="textarea"
                        name="step2"
                        value={values.stepTwoDescription}
                        onChange={ onStepTwoChange }
                    />
                </FormGroup>

                <FormGroup className="stepThree">
                    <Label for="step3">Step 3</Label>
                    <Input
                        type="textarea"
                        name="step3"
                        value={values.stepThreeDescription}
                        onChange={ onStepThreeChange }
                    />
                </FormGroup>

                <FormGroup className="userid">
                    <Input value={ userid } hidden name="userIdValue"></Input>
                </FormGroup>

                <Button block>Submit</Button>
            </Form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        values: state.newHackReducer.formValues,
    }
}

export default connect(
    mapStateToProps,
    {
        onTitleChange,
        onDescriptionChange,
        onStepOneChange,
        onStepTwoChange,
        onStepThreeChange,
        userid,
        addHack
    }
)(NewHackForm)