import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WorkoutView from './components/WorkoutView';
import Home from './components/Home';
import AddPlan from './components/AddPlan';
// import useToken from './useToken';
import Login from './components/Login';

import './App.css';

function App() {
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState(0);
  const [name, setName] = useState('');
  if (!token){
    return <Login setToken={setToken} setUserId={setUserId} setName={setName}/>
}
  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path="/" element={ <Home token={token} name={name} userId={userId} /> } exact />
        <Route path="/workouts" element={ <WorkoutView token={token} userId={userId}/> } />
        <Route path="/add" element={ <AddPlan token={token} userId={userId}/> } />
        
      </Routes>
    </div>
  );
}

export default App;
