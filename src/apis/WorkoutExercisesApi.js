const URI = "http://localhost:8080/api"
// "http://3.94.133.232:8080/api/"

const WorkoutExercisesApi = {

    getAllWorkoutsExercises: (setWorkoutExerciseList, token) => {
        const request = URI + "/workoutExercises";
        const authString = "Bearer " + (token.token.jwt).toString();
        console.log(authString);
        fetch(request, {
            headers: { 
                 "Content-Type": "application/json",
                 "Authorization": authString}
        })
        
            .then(response => response.json())
            .then(data => {
                 console.log("WORKOUT EXERCISES RETRIEVED")
            console.log(data)
            setWorkoutExerciseList(data)
        })
            .catch(error => console.error(error));
    },

    getWorkoutExercisesById: (id, setWorkoutExercise, token) => {
        const request = URI + `/workoutExercises/id/${id}`;
        const authString = "Bearer " + (token.token.jwt).toString();
        console.log(authString);
        fetch(request, {
            headers: { 
                 "Content-Type": "application/json",
                 "Authorization": authString}
        })
        .then(response => {
                if (response.status === 404) {
                    console.log(`WorkoutExercises with ID ${id} not found`);
                } else {
                    response.json();
                }
            })
            .then(data => {
                console.log("WORKOUT EXERCISES RETRIEVED")
                console.log(data)
                setWorkoutExercise(data)
            })
            .catch(error => console.error(error));
    },

    createWorkoutExercise: (workoutExerciseToCreate, token) => {
        const request = URI + "/workoutExercises";
        const authString = "Bearer " + (token.token.jwt).toString();
        console.log(authString);
        fetch(request, {
            method: "POST",
            headers: { 
                 "Content-Type": "application/json",
                 "Authorization": authString},
            body: JSON.stringify(workoutExerciseToCreate)
        })
        .then( result => result.json() )
        .then( data => {
            console.log("WORKOUT EXERCISE CREATED")
            console.log(data)
      })
      .catch(error => console.error(error)); 

    },

    // TODO make sure to change this to handle username also
    deleteWorkout: (workoutExerciseId, token) => {
        const request = URI + `/workoutExercises/${workoutExerciseId}`;
        const authString = "Bearer " + (token.token.jwt).toString();
        console.log(authString);
        fetch(request, {
            method: 'DELETE',
            headers: { 
                 "Content-Type": "application/json",
                 "Authorization": authString}
        })
        .then((response) => {
            if (response.status === 204) {
                console.log("WORKOUT EXERCISE DELETED");
                // the workout was deleted, so we alert the user
                alert(`Your workout exercise with ID ${workoutExerciseId} was deleted!`);
            } else {
                console.log(`Error deleting workout exercise with ID ${workoutExerciseId}: ${response.status}`);
            }
        })
        .catch((error) => {
            console.error(error);
        });
    },

    // TODO make sure to change this to handle username also
    updateWorkout: (workoutExerciseToUpdate, token) => {
        const request = URI + "/workoutExercises/{workoutToUpdate.id}";
        const authString = "Bearer " + (token.token.jwt).toString();
        console.log(authString);
        fetch(request, {
            headers: { 
                 "Content-Type": "application/json",
                 "Authorization": authString}
        })
          .then(result => result.json())
          .then(data => {
            console.log('WORKOUT EXERCISE UPDATED');
            console.log(data);
      
          })
            .catch((error) => {
            console.log(error);
          });
      }


}

export default WorkoutExercisesApi;
