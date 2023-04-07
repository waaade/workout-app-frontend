import React, {useState} from 'react';

async function LoginUser(credentials) {
    console.log("Attempting to login with username " + credentials.username + " and password " + credentials.password);
    return fetch('http://localhost:8080/authenticate',{
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}

const Login = ({setToken}) => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = await LoginUser({
            username, 
            password})
        setToken(token)
    }
    

    return (
        <>
        <div className='login'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            
                <input type="text" required onChange={(e)=>setUsername(e.target.value)} placeholder='Username'/>
                <br />
                <input type="password" required onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
                <br />
            <button type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}
    
export default Login;