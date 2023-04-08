import React, { useState } from 'react';
import WorkoutApi from '../apis/WorkoutApi';

// temporary dummy username
const dummyUsername = "Joe";

const AddPlan = (token) => {
    console.log(JSON.stringify(token));
    const[ exercise, setExercise ] = useState("")
    const[ reps, setReps ] = useState(0)
    const[ weight, setWeight ] = useState(0)
    const[ date, setDate ] = useState("")

    // called when form is submitted
    // TODO
    const handleSubmit = (event) => { // event -> represents the event of submitting the form

        const workout = {
            "exercise": exercise,
            "reps": reps,
            "weight": weight,
            "date": date,
            "username": dummyUsername
        }

        // make a POST request here to create the product
        WorkoutApi.createWorkout(workout)

        // stop the page from refreshing/reloading when submitting the form
        event.preventDefault()
    }

    return (
        <div>
            <h1>Create a Workout Plan</h1>

            <form onSubmit={ handleSubmit }>
                <div>
                    <label htmlFor='wo-exercise' className='form-label' >
                        Exercise
                    </label>
                    <input type="text"
                           className='form-control'
                           id='wo-exercise'
                           required
                           name="wo-exercise"
                           value={exercise}
                           onChange={ (event) => { setExercise(event.target.value) } }
                        />
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
                           required
                           min="1"
                           step="1"
                           name="wo-weight"
                           value={weight}
                           onChange={ (event) => setWeight(event.target.value) } 
                           />
                </div>

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
                </div>

                <button type="submit" className="btn btn-primary">
                    Create
                </button>
            </form>
        </div>
    );
};

export default AddPlan;