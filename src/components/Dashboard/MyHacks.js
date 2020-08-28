import React from 'react'

// REDUX
import { connect } from 'react-redux'
import { fetchHacks } from '../../actions/dashboard-hacks'

// COMPONENTS
import MyHacksCard from './MyHacksCard'
import {
    Spinner,
} from 'reactstrap'

const MyHacks = (props) => {

    return(
        <div className="dashboard-myhacks">
            <h3>Welcome Back, Chris</h3>
            <hr/>
            <h2>My Hacks</h2>
            {props.isFetching ? (
                <div className="fetchng">
                    <Spinner style={{width: '3rem', height: '3rem'}} type="grow"/>
                    {props.fetchHacks()}
                </div>
            ) : (
                <div className="cards">
                    {console.log(props)}
                    
                    {props.hacks.map ( hack => {
                        return(
                            <MyHacksCard
                                key={hack.userId === 1}
                                title={hack.title}
                                description={hack.description}
                                firstName={hack.firstName}
                                lastName={hack.lastName}
                            />
                        )
                    })}
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
    { fetchHacks }
)(MyHacks)