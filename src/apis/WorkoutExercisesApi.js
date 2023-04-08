const URI = "http://localhost:8080/api"

const WorkoutExerciseApi = {

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
            setWorkoutList(data)
        })
            .catch(error => console.error(error));
    },

    getWorkoutExerciseById: (id, setWorkoutExercise, token) => {
        const request = URI + "/workoutExercises/{id}";
        const authString = "Bearer " + (token.token.jwt).toString();
        console.log(authString);
        fetch(request, {
            headers: { 
                 "Content-Type": "application/json",
                 "Authorization": authString}
        })
        .then(response => {
                if (response.status === 404) {
                    console.log(`WorkoutExercise with ID ${id} not found`);
                } else {
                    return response.json();
                }
            })
            .then(data => {
                console.log("WORKOUT EXERCISE RETRIEVED")
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
            headers: { 
                 "Content-Type": "application/json",
                 "Authorization": authString}
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
        const request = URI + "/workoutExercises/{workoutExerciseId}";
        const authString = "Bearer " + (token.token.jwt).toString();
        console.log(authString);
        fetch(request, {
            headers: { 
                 "Content-Type": "application/json",
                 "Authorization": authString}
        })
        .then((response) => {
            if (response.status === 204) {
                console.log("WORKOUT EXERCISE DELETED");
                // the workout was deleted, so we alert the user
                alert(`Your workout exercise with ID ${workoutId} was deleted!`);
            } else {
                console.log(`Error deleting workout exercise with ID ${workoutId}: ${response.status}`);
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
