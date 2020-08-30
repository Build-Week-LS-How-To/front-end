import React from 'react'

// STYLES
import '../../styles/Home.scss'

// REDUX
import { connect } from 'react-redux'
import { reloadHacks } from '../../actions/dashboard-hacks'
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
                {props.reloadHacks()}
            </div>
        ) : (
            <div className="cards">
                {props.hacks.map ( hack => {
                    return (
                        <HomeHacksCard
                            key={hack.userId}
                            title={hack.title}
                            description={hack.description}
                            firstName={hack.firstName}
                            lastName={hack.lastName}
                            id={hack.id}
                            upVote={hack.upVote}
                            downVote={hack.downVote}
                            img_url={hack.img_url}
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
        isFetching: state.hacksReducer.isFetching,
        hacks: state.hacksReducer.hacks,
        error: state.hacksReducer.error
    }
}

export default connect(
    mapStateToProps,
    { reloadHacks }
)(HomePage) 