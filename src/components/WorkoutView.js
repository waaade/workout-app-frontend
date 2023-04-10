import React, { useEffect, useState } from 'react';
import WorkoutApi from '../apis/WorkoutApi';
import WorkoutExercisesApi from '../apis/WorkoutExercisesApi';

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

const WorkoutView = (token, id) => {

    // workoutList -> state variable
    // setWorkoutList -> function that changes the value of productList
    // useState( [] ) -> helps set up state, sets state as an empty array
    const [workoutList, setWorkoutList] = useState([])
    const [workoutExerciseList, setWorkoutExerciseList] = useState([])


    // useEffect -> function that allows us to access the component lifecycles (rerenders, mounts on the page, unmounted from the page)

    // useEffect( function, [] ) => function will get called when the component gets mounted
    useEffect( () => {
        console.log("Hello, this component was mounted!")

        //WorkoutApi.getAllUserWorkouts(setWorkoutList, token);
        // WorkoutExercisesApi.getAllWorkoutsExercises(setWorkoutExerciseList, token);
        WorkoutExercisesApi.getWorkoutExercisesById(id, setWorkoutExerciseList, token);
       

    }, [token] )

    function handleDelete(id) {
        const newList = workoutExerciseList.filter((item) => item.id !== id);
        setWorkoutExerciseList(newList);
    }



    return (
        <div>
            <h1>Your Workouts</h1>


            {/* <table className='table'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Exercise</th>
                        
                        <th>User ID</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        // UserWorkout table
                        workoutList.map( w =>  
                                    <tr key={w.id}>
                                        <td>{w.workoutDate}</td>
                                        <td>{w.userId}</td>
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
            </table> */}
            
            <table className='table'>
                <thead>
                    <tr>
                        <th>Workout ID</th>
                        <th>Workout Date</th>
                        <th>ID</th>
                        <th>Exercise</th>
                        <th>Reps</th>
                        <th>Weight</th>
                    </tr> 
                </thead>
                <tbody>
                {
                    //WorkoutExercise Table
                    workoutExerciseList.map( e => 
                    <tr key={e.id}>
                    <td>{e.workoutId.workoutid}</td>
                    <td>{`${e.workoutId.workoutDate[2]}-${e.workoutId.workoutDate[1]}-${e.workoutId.workoutDate[0]}`}</td>
                    <td>{e.id}</td>
                    <td>{e.exerciseId.exerciseType}</td>
                    <td>{e.reps}</td>
                    <td>{e.weight}</td>
                    <td>
                        <button className="btn btn-danger" onClick={() => handleDelete(e.id)}>
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