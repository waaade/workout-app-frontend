import React, { useEffect, useState } from 'react';
//import ProductApi from '../apis/ProductApi';

// UserWorkout table dummy
const workoutDummyList = [
    {
        "workoutId": 1,
        "workout": {
            "exercise": "Bench press",
            "reps": 30,
            "weight": 200
        },
        "workoutDate": "05/06/2023",
        "username": "Joe",
    },
    {
        "workoutId": 2,
        "workout": {
            "exercise": "Squats",
            "reps": 30,
            "weight": 300
        },
        "workoutDate": "05/04/2023",
        "username": "Joe",
    },
    {
          "workoutId": 3,
          "workout": {
            "exercise": "Power clean",
            "reps": 30,
            "weight": 150
        },
        "workoutDate": "05/06/2023",
        "username": "Joe",
    }
]

const WorkoutView = (token) => {

    // workoutList -> state variable
    // setWorkoutList -> function that changes the value of productList
    // useState( [] ) -> helps set up state, sets state as an empty array
    const [workoutList, setWorkoutList] = useState([])


    // useEffect -> function that allows us to access the component lifecycles (rerenders, mounts on the page, unmounted from the page)

    // useEffect( function, [] ) => function will get called when the component gets mounted
    useEffect( () => {
        console.log("Hello, this component was mounted!")

        //WorkoutApi.getWorkouts(setWorkoutList)
       

    }, [] )




    return (
        <div>
            <h1>Your Workouts</h1>


            <table className='table'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Exercise</th>
                        <th>Reps</th>
                        <th>Weight</th>
                        <th>Username</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        workoutDummyList.map( w =>  
                                    <tr key={w.id}>
                                        <td>{w.workoutDate}</td>
                                        <td>{w.workout.exercise}</td>
                                        <td>{w.workout.reps}</td>
                                        <td>{w.workout.weight}</td>
                                        <td>{w.username}</td>
                                        <td>
                                            <button className="btn btn-danger">
                                                Delete
                                            </button>
                                            <button className='btn btn-primary'>
                                                Update
                                            </button>
                                        </td>
                                    </tr>
                            )
                    }

                </tbody>
            </table>



        </div>
    );
};

export default WorkoutView;