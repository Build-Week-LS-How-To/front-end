import React from 'react'

// STYLES
import '../../styles/Home.scss'

// REDUX
import { connect } from 'react-redux'
import { fetchAllHacks } from '../../actions/dashboard-hacks'
import { Spinner } from 'reactstrap'

// COMPONENTS
import HomeHacksCard from './HomeHacksCard'
import SearchBar from './SearchBar'

const HomePage = (props) => {

    return(
        <div className="homepage-hacks">
        <h1>Welcome to How To</h1>
        <SearchBar />
        
        {props.isFetching ? (
            <div className="fetchng">
                <Spinner style={{width: '3rem', height: '3rem'}} type="grow"/>
                {props.fetchAllHacks()}
            </div>
        ) : (
            <div className="cards">
                
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