import React from 'react'

// REDUX

import { connect } from 'react-redux'
import { fetchHacks,fetchAllHacks } from '../../actions/dashboard-hacks'

// COMPONENTS
import MyHacksCard from './MyHacksCard'
import {
    Spinner,
} from 'reactstrap'

const MyHacks = (props) => {

    return(
        <div className="dashboard-myhacks">
            <h3>Welcome Back, testUser</h3>
            <hr/>
            <h2>My Hacks</h2>
            {props.fetchAllHacks()}
            {props.isFetching ? (
                <div className="cards">
                
                {props.hacks.map (hack => {
                    return(
                        
                        <MyHacksCard
                            key={hack.userId} //change by romeo
                            title={hack.title}
                            body={hack.description}
                            stepone={hack.stepOneDescription}
                            steptwo={hack.stepTwoDescription}
                            stepthree={hack.stepThreeDescription}
                            userId={hack.id}
                        />)})}
                </div>
            ):(
                <div className="fetchng">
                 <Spinner style={{width: '3rem', height: '3rem'}} type="grow"/>
                  
                </div>
                        
                    
                
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching,
        hacks: state.hacks,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { fetchHacks,fetchAllHacks }
)(MyHacks)