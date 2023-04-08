import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WorkoutView from './components/WorkoutView';
import Home from './components/Home';
import AddPlan from './components/AddPlan';
//import useToken from './useToken';
import Login from './components/Login';

import './App.css';

function App() {
  const [token, setToken] = useState();
  // const {token, setToken} = useToken();
  if (!token){
    return <Login setToken={setToken}/>
}
  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path="/" element={ <Home token={token}/> } exact />
        <Route path="/workouts" element={ <WorkoutView token={token}/> } />
        <Route path="/add" element={ <AddPlan token={token}/> } />
        
      </Routes>
    </div>
  );
}

export default App;
