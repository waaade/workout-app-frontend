import React, { useEffect, useState } from 'react';
import WorkoutApi from '../apis/WorkoutApi';
import ExercisesApi from '../apis/ExercisesApi';
import WorkoutExerciseApi from '../apis/WorkoutExercisesApi';

const AddPlan = (token, userId) => {
    console.log(token)
    // console.log(JSON.stringify(token));
    const [exercise, setExercise ] = useState("")
    const [exerciseList, setExerciseList] = useState([])
    const [workout, setWorkout] = useState("new") // needs to choose a workout to add to, or create new (default)
    const [userWorkoutList, setUserWorkoutList] = useState([]) // list of existing workouts
    const [reps, setReps] = useState(0)
    const [weight, setWeight] = useState(0)
    const [date, setDate] = useState("")

    useEffect( () => {
       // populate exericse field
        ExercisesApi.getAllExercises(setExerciseList, token);

        // populate workout field so that user can add to one or create new workout
        WorkoutApi.getAllUserWorkouts(setUserWorkoutList, token);

    }, [token] )
    

    // called when form is submitted
    
    const handleSubmit = (event) => { // event -> represents the event of submitting the form
        // create new workout in UserWorkout
        const theUser = token.userId; 
        if (workout === "new") {
            const userWorkoutToPost = {
                "userId": theUser,
                "workoutDate": date
            }

            console.log(userWorkoutToPost);
            WorkoutApi.createWorkout(userWorkoutToPost, setWorkout, token)
            
        };
        console.log(exercise);
        console.log(workout);
        const exerciseToPost = {
            "exerciseId": exercise,
            "workoutId": workout,
            "reps": reps,
            "weight": weight
        }
        // console.log(exerciseToPost);
        //WorkoutExerciseApi.createWorkoutExercise(exerciseToPost, token);

        event.preventDefault()
    }

    return (
        <div>
            <h1>Create a Workout Plan</h1>

            <form onSubmit={ handleSubmit }>
            <div>
                    <label htmlFor='wo-workout' className='form-label' >
                        Select Workout
                    </label>
                    <select value = {workout}
                           className='form-control'
                           id='wo-workout'
                           required
                           name="wo-workout"
                           onChange={ (event) => { setWorkout(event.target.value) } }>
                            <option value='new'>Create New Workout</option>
                            {userWorkoutList.map( w =>
                                <option key={w.workoutid} 
                                value={w}>
                                    Workout {w.workoutid} on {`${w.workoutDate[2]}-${w.workoutDate[1]}-${w.workoutDate[0]}`}
                                </option>)
                            }
                           </select>
                </div>
                { workout === "new" && ( // don't pick date here if not new workout
                    <div>
                            <label htmlFor='wo-date' className='form-label' >
                        Date
                    </label>
                    <input type="date"
                           className='form-control'
                           id='wo-date'
                           required
                           name="wo-weight"
                           value={date}
                           onChange={ (event) => setDate(event.target.value) }
                           /> 
                </div>)} 
                <div>
                    <label htmlFor='wo-exercise' className='form-label' >
                        Exercise
                    </label>
                    <select value = {exercise}
                           className='form-control'
                           id='wo-exercise'
                           required
                           name="wo-exercise"
                           onChange={ (event) => { setExercise(event.target.value) } }>
                            {exerciseList.map( e =>
                                <option key={e.id} value={e}>{e.exerciseType}</option>)
                            }
                           </select>
                </div>

                <div>
                    <label htmlFor='wo-reps' className='form-label' >
                        Reps
                    </label>
                    <input type="number"
                           className='form-control'
                           id='wo-reps'
                           required
                           min="1"
                           step="1" 
                           name="wo-reps"
                           value={reps}
                           onChange={ (event) => { setReps(event.target.value) } }
                           />
                </div>

                <div>
                    <label htmlFor='wo-weight' className='form-label' >
                        Weight
                    </label>
                    <input type="number"
                           className='form-control'
                           id='wo-weight'
                           min="1"
                           step="1"
                           name="wo-weight"
                           value={weight}
                           onChange={ (event) => setWeight(event.target.value) } 
                           />
                </div>

                    

                <button type="submit" className="btn btn-primary">
                    Create
                </button>
            </form>
        </div>
    );
};

export default AddPlan;