import React, { useEffect, useState } from 'react';
import WorkoutApi from '../apis/WorkoutApi';


const Home = (token) => {
    const [userWorkouts, setUserWorkouts] = useState([]);
    const [currentUW, setCurrentUW] = useState(0);

    // Get a list of all the userWorkouts
    useEffect(() => {
        
        WorkoutApi.getAllUserWorkouts(setUserWorkouts, token)

    }, [])

    // After the list of userWorkouts is collected, count the workouts made by the currently signed in user
    useEffect(() => {

        const currentUsersUserWorkouts = userWorkouts.filter((uw) => uw.userId.id === token.userId);
        console.log(currentUsersUserWorkouts.length)
        if (currentUsersUserWorkouts.length > 0) {
            setCurrentUW(currentUsersUserWorkouts.length);
        }

    }, [userWorkouts])

    return (
        <div style={{marginTop: '10px'}}>
            <h2>Welcome, {token.name} </h2>
            <h4>{token.name}, you have a total of {currentUW} workouts. {currentUW ? 'Keep up the good work!' : 'You can do better than that!'}</h4>
        </div>
    )
}

export default Home;