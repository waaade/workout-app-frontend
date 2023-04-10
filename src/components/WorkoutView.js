import React, { useEffect, useState } from 'react';
import WorkoutApi from '../apis/WorkoutApi';
import WorkoutExercisesApi from '../apis/WorkoutExercisesApi';


const WorkoutView = (token) => {
    

    // workoutList -> state variable
    // setWorkoutList -> function that changes the value of productList
    // useState( [] ) -> helps set up state, sets state as an empty array
    const [workoutList, setWorkoutList] = useState([])
    const [workoutExerciseList, setWorkoutExerciseList] = useState([])
    const [currentWorkoutExercises, setCurrentWorkoutExercises] = useState([]);

    let count = 1;


    // useEffect -> function that allows us to access the component lifecycles (rerenders, mounts on the page, unmounted from the page)

    // useEffect( function, [] ) => function will get called when the component gets mounted
    useEffect( () => {
        console.log("Hello, this component was mounted!")

        //WorkoutApi.getAllUserWorkouts(setWorkoutList, token);
        // WorkoutExercisesApi.getAllWorkoutsExercises(setWorkoutExerciseList, token);
        WorkoutExercisesApi.getAllWorkoutsExercises(setWorkoutExerciseList, token);

    },[])

    useEffect(() => {

        const currentUsersWE = workoutExerciseList.filter((we) => we.workoutId.userId.id === token.id);
        currentUsersWE.reverse();

        setCurrentWorkoutExercises(currentUsersWE);

    },[workoutExerciseList])

    function handleDelete(id) {
        console.log(id)
        const newList = currentWorkoutExercises.filter((item) => item.id !== id);
        setCurrentWorkoutExercises(newList);
        // setWorkoutExerciseList(newList);
        WorkoutExercisesApi.deleteWorkout(id, token);
        
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
                        <th>Workout Number</th>
                        <th>Workout Date</th>
                        <th>Exercise</th>
                        <th>Reps</th>
                        <th>Weight</th>
                    </tr> 
                </thead>
                <tbody>
                {
                    //WorkoutExercise Table
                    currentWorkoutExercises.map( e => 
                    <tr key={e.id}>
                    <td>{count++}</td>
                    <td>{`${e.workoutId.workoutDate[2]}-${e.workoutId.workoutDate[1]}-${e.workoutId.workoutDate[0]}`}</td>
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