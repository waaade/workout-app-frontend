import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h2> TODO. </h2>
            <p>Maybe we could show something like, "Hello User, you have ? workouts this week"?</p>
            <Link to="/workouts" >My Workouts </Link>
            <Link to="/add" >Create a Workout</Link>
        </div>
    )
}

export default Home;