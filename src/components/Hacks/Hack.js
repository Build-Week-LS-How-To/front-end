import React from 'react';

// COMPONENTS
import StepCard from './StepCard';

const Hack = (props) => {
    console.log('props from Hack.js', props)

    return(
        <div>
            <div>
                <h1>Life Hack Title</h1>
                <p>Description</p>
            </div>

            <div>
                <StepCard />
            </div>
        </div>
    )
}

export default Hack