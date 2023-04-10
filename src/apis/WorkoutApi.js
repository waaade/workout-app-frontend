const URI = "http://localhost:8080/api"
// const URI = "http://3.94.133.232:8080/api/"

const WorkoutApi = {

    getAllUserWorkouts: (setWorkoutList, token, userId) => {
        const request = URI + "/userWorkouts";
        const authString = "Bearer " + (token.token.jwt).toString();
        console.log(authString);
        fetch(request, {
            headers: { 
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
    
    getUserWorkoutById: (id, setUserWorkout, token) => {
        const authString = "Bearer " + (token.token.jwt).toString();
        fetch(`${URI}/userWorkouts/${id}`, {
            headers: { 
            "Authorization": authString}
        })
        .then(response => response.json())
        .then(data => {
        console.log("WORKOUT RETRIEVED")
        console.log(data)
        setUserWorkout(data)
        })
        .catch(error => console.error(error));
    },
    
    createWorkout: (workoutToCreate, setWorkout, token) => {
        const authString = "Bearer " + (token.token.jwt).toString();
        // fetch( uri for request, request object )
        
        fetch(`${URI}/userWorkouts`, {
            method: "POST", // type of request
            headers: { "Content-Type": "application/json",
                        "Authorization": authString }, // header of request
            body: JSON.stringify(workoutToCreate) // body of request, convert object to json string
        } )
            .then( result => result.json() )
            .then( data => {
                console.log("WORKOUT CREATED")
                console.log(data)
                setWorkout(data)
                 // the workout was created, so we alert the user
                alert("Your workout was created!" + 
                    `\nWorkoutId: ${data.workoutid}` +
                    `\nUserID: ${data.userId.id}` + 
                    `\nDate: ${data.workoutDate}`
                    )

            } )
            .catch( (error) => { console.log(error) } ) 

    },

    
    deleteWorkout: (workoutId, token) => {
        const authString = "Bearer " + (token.token.jwt).toString();
        fetch(`${URI}/userWorkouts/${workoutId}`, {
            method: "DELETE", // type of request
            headers: { "Content-Type": "application/json",
                        "Authorization": authString }, // header of request
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
      
    
    updateWorkout: (workoutToUpdate, token) => {
        const authString = "Bearer " + (token.token.jwt).toString();
        fetch(`${URI}/userWorkouts/${workoutToUpdate.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            "Authorization": authString
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