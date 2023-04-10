import React, {useState} from 'react';
import PropTypes from 'prop-types';

function loginCheck(response) {
    if (response.status === 201) {
        return response.json();
    } else {
        alert("Wrong login info. Try again");
        window.location.reload(false);
    }
}

async function LoginUser(credentials) {
    console.log("Attempting to login with username " + credentials.username + " and password " + credentials.password);
    return fetch('http://localhost:8080/authenticate',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => loginCheck(data));
}

async function getUserInfo(name, token) {
    const authString = "Bearer " + (token).toString();
    console.log(authString);
    return fetch(`http://localhost:8080/api/users/name/${name}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": authString
        }
    }).then(data => data.json());
}

const Login = ({setToken, setUserId, setName}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await LoginUser({
            username, 
            password
        });

        setToken(token);
        console.log(JSON.stringify(token));

        const userInfo = await getUserInfo(username, token.jwt);
        console.log(userInfo.id);
        setUserId(userInfo.id);
        console.log(username);
        setName(username);
    }
    

    return (
        <>
        <div className='login'>
            <h2 className="display-1">Login</h2>
            <form onSubmit={handleSubmit}>
            
                <div style={{maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto'}} className="form-outline mb-4">
                    <input style={{textAlign: 'center'}}className="form-control" type="text" required onChange={e=>setUsername(e.target.value)} placeholder='Username'/>
                    <br />
                    <input style={{textAlign: 'center'}}className="form-control" type="password" required onChange={e=>setPassword(e.target.value)} placeholder='Password'/>

                </div>
            <button className="btn btn-primary btn-block" type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
    
export default Login;