import React, { useEffect } from 'react';

// REDUX
import { connect } from 'react-redux'
import { fetchHacksSteps } from '../../actions/dashboard-hacks'

// COMPONENTS
import StepCard from './StepCard';

// STYLES
import '../../styles/hack.scss'

const Hack = (props) => {

    const hackId = props.match.params.id

    useEffect(() => {
        props.fetchHacksSteps(hackId)
    }, []);

    return(
        <div className="hack">
            <header>
                <h1>{props.hack.title}</h1>
                <p>{props.hack.description}</p>
            </header>

            <div className="hack-steps">
                <StepCard
                    step={props.hack.stepOneTitle}
                    stepDescription={props.hack.stepOneDescription}
                />
                <StepCard
                    step={props.hack.stepTwoTitle}
                    stepDescription={props.hack.stepTwoDescription}
                />
                <StepCard
                    step={props.hack.stepThreeTitle}
                    stepDescription={props.hack.stepThreeDescription}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        isFetching: state.hacksStepsReducer.isFetching,
        hack: state.hacksStepsReducer.hack,
        error: state.hacksStepsReducer.error
    }
}

export default connect(
    mapStateToProps,
    { fetchHacksSteps }
)(Hack)