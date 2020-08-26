import React from 'react'

// STYLES
import '../../styles/Home.scss'

// REDUX
import { connect } from 'react-redux'
import { fetchAllHacks } from '../../actions/dashboard-hacks'
import { Spinner } from 'reactstrap'

// COMPONENTS
import HomeHacksCard from './HomeHacksCard'

const HomePage = (props) => {

    return(
        <div className="homepage-hacks">
        <h1>Welcome to How To</h1>
        {props.isFetching ? (
            <div className="fetchng">
                <Spinner style={{width: '3rem', height: '3rem'}} type="grow"/>
                {props.fetchAllHacks()}
            </div>
        ) : (
            <div className="cards">
                {console.log(props)}
                {props.hacks.map ( hack => {
                    return (
                        <HomeHacksCard
                            key={hack.userId}
                            title={hack.title}
                            body={hack.body}
                            userId={hack.userId}
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
    { fetchAllHacks }
)(HomePage) 