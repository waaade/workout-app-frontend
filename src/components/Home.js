import React, { useEffect, useState } from 'react';
import WorkoutApi from '../apis/WorkoutApi';
import WorkoutExercisesApi from '../apis/WorkoutExercisesApi';


const Home = (token, userId) => {
    const [userWorkouts, setUserWorkouts] = useState([]);
    const [currentUW, setCurrentUW] = useState(0);

    // Get a list of all the userWorkouts
    useEffect(() => {
        
        WorkoutExercisesApi.getAllWorkoutsExercises(setUserWorkouts, token)

    }, [token])

    // After the list of userWorkouts is collected, count the workouts made by the currently signed in
    useEffect(() => {

        const currentUsersUserWorkouts = userWorkouts.filter((uw) => uw.workoutId.userId.id === token.userId);
        console.log(currentUsersUserWorkouts.length)
        if (currentUsersUserWorkouts.length > 0) {
            setCurrentUW(currentUsersUserWorkouts.length);
        }

    }, [userWorkouts, token, userId])

    return (
        <div style={{marginTop: '10px'}}>
            <h2>Welcome, {token.name} </h2>
            <h4>{token.name}, you have a total of {currentUW} {currentUW === 1 ? 'workout' : 'workouts'}. {currentUW ? 'Keep up the good work!' : 'You can do better than that!'}</h4>
        </div>
    )
}

export default Home;