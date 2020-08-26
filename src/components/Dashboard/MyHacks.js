import React from 'react'

// COMPONENTS
import MyHacksCard from './MyHacksCard'

const MyHacks = () => {

    return(
        <div className="dashboard-myhacks">
            <h3>Welcome Back, Chris!</h3>
            <hr/> 
            <h2>My Hacks</h2>
            <MyHacksCard />
        </div>
    )
}

export default MyHacks