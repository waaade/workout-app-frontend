const URI = "http://localhost:8080/api"
// "http://3.94.133.232:8080/api/"

const ExercisesApi = {

    getAllExercises: (setExerciseList, token) => {
        const request = URI + "/exercises";
        const authString = "Bearer " + (token.token.jwt).toString();
        console.log(authString);
        fetch(request, {
            headers: { 
                 "Content-Type": "application/json",
                 "Authorization": authString}
        })

        .then(response => response.json())
        .then(data => {
             console.log("EXERCISES RETRIEVED")
        console.log(data)
        setExerciseList(data)
    })
        .catch(error => console.error(error));
},
    getExerciseById: (id, setExercise, token) => {
        const request = URI + "/exercises/{id}";
        const authString = "Bearer " + (token.token.jwt).toString();
        console.log(authString);
        fetch(request, {
            headers: { 
                "Content-Type": "application/json",
                "Authorization": authString}
        })
        .then(response => {
                if (response.status === 404) {
                    console.log(`Exercise with ID ${id} not found`);
                } else {
                    return response.json();
                }
            })
        .then(data => {
            console.log("WORKOUT EXERCISE RETRIEVED")
            console.log(data)
            setExercise(data)
        })
        .catch(error => console.error(error));
     }
}

export default ExercisesApi;