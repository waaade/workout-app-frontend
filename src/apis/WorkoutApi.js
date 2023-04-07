
//const URI = "http://54.201.89.155:8080/api/product"

const WorkoutApi = {

    getProducts: (setWorkoutList) => {

        // fetch -> promise based library within JS that helps you make API calls

        // fetch(URI) -> retrieve data at this uri (assume a GET request unless stated otherwise)
        fetch( URI )
            .then( (result) => {      // go here if request successful (200 response)

                console.log("RESULT")
                console.log(result)

                return result.json() // data in next section
            } )
            .then( (data) => {

                console.log("DATA:")
                console.log(data)

                setWorkoutList(data)

            } )
            .catch( (error) => { console.log(error) } ); // if fetch fails, go here (400/500 responses)
        
    },

    createWorkout: (workoutToCreate) => {

        // fetch( uri for request, request object )
        // TODO make sure to change this to handle username also
        fetch( URI, {
            method: "POST", // type of request
            headers: { "Content-Type": "application/json" }, // header of request
            body: JSON.stringify(workoutToCreate) // body of request, convert object to json string
        } )
            .then( result => result.json() )
            .then( data => {
                console.log("WORKOUT CREATED")
                console.log(data)

                 // the workout was created, so we alert the user
                alert("Your workout was created!" + 
                    `\nID: ${data.id}` +
                    `\nName: ${data.exercise}` + 
                    `\nPrice: ${data.reps}` +
                    `\nQuantity: ${data.weight}`
                    )

            } )
            .catch( (error) => { console.log(error) } ) 

    },

    deleteProduct: () => {

    },

    updateProduct: () => {

    }

}

// allows you to use this object outside of this file
export default ProductApi;