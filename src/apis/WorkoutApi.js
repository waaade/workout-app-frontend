const URI = "http://localhost:8080/api"

const WorkoutApi = {

    getAllUserWorkouts: (setWorkoutList, token) => {
        const request = URI + "/userWorkouts";
        const authString = "Bearer " + JSON.stringify(token.token.jwt);
        console.log(authString);
        fetch(request, {
            headers: { 
                 "Content-Type": "application/json",
                 "Authorization": authString}
        })
        
            .then(response => response.json())
            .then(data => {
                console.log("WORKOUTS RETRIEVED")
                console.log(data)
                setWorkoutList(data)
            })
            .catch(error => console.error(error));
    },
    
    getUserWorkoutById: (id, setUserWorkout) => {
        fetch(`${URI}/userWorkouts/${id}`)
        .then(response => response.json())
        .then(data => {
        console.log("WORKOUT RETRIEVED")
        console.log(data)
        setUserWorkout(data)
        })
        .catch(error => console.error(error));
    },
    
    createWorkout: (workoutToCreate, token) => {

        // fetch( uri for request, request object )
        // TODO make sure to change this to handle username also
        fetch(`${URI}/userWorkouts`, {
            method: "POST", // type of request
            headers: { "Content-Type": "application/json",
                        "Authorization": "Bearer " + token.jwt }, // header of request
            body: JSON.stringify(workoutToCreate) // body of request, convert object to json string
        } )
            .then( result => result.json() )
            .then( data => {
                console.log("WORKOUT CREATED")
                console.log(data)

                 // the workout was created, so we alert the user
                alert("Your workout was created!" + 
                    `\nID: ${data.id}` +
                    `\nExercise: ${data.exercise}` + 
                    `\nReps: ${data.reps}` +
                    `\nWeight: ${data.weight}`
                    )

            } )
            .catch( (error) => { console.log(error) } ) 

    },

    // TODO make sure to change this to handle username also
    deleteWorkout: (workoutId) => {
        fetch(`${URI}/userWorkouts/${workoutId}`, {
            method: "DELETE", // type of request
            headers: { "Content-Type": "application/json" }, // header of request
        })
        .then((response) => {
            if (response.status === 204) {
                console.log("WORKOUT DELETED");
                // the workout was deleted, so we alert the user
                alert(`Your workout with ID ${workoutId} was deleted!`);
            } else {
                console.log(`Error deleting workout with ID ${workoutId}: ${response.status}`);
            }
        })
        .catch((error) => {
            console.error(error);
        });
    },
      
    // TODO make sure to change this to handle username also
    updateWorkout: (workoutToUpdate) => {
        fetch(`${URI}/userWorkouts/${workoutToUpdate.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(workoutToUpdate)
        })
          .then(result => result.json())
          .then(data => {
            console.log('WORKOUT UPDATED');
            console.log(data);
      
            // the workout was updated, so we alert the user
            alert('Your workout was updated!' +
              `\nID: ${data.id}` +
              `\nExercise: ${data.exercise}` +
              `\nReps: ${data.reps}` +
              `\nWeight: ${data.weight}`
            );
      
          })
          .catch((error) => {
            console.log(error);
          });
      }
     
}

// allows you to use this object outside of this file
export default WorkoutApi;